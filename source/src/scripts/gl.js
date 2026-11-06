// Hero particle field in raw WebGL (no libraries).
// Particles start as a rotating sphere, assemble into a word, scatter
// away from the cursor, and explode into a vortex as you scroll.

const VERT = `
attribute vec3 aSphere;
attribute vec3 aText;
attribute vec4 aRand;
uniform float uTime;
uniform float uMix;
uniform float uScroll;
uniform vec2 uMouse;
uniform float uMouseActive;
uniform float uAspect;
uniform float uSize;
uniform float uPixel;
uniform float uTextScale;
varying float vRand;
varying float vMix;
varying float vEmber;

mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

void main(){
  // staggered assemble: each particle has its own delay
  float d = aRand.x * 0.45;
  float m = clamp((uMix - d) / (1.0 - 0.45), 0.0, 1.0);
  m = m * m * (3.0 - 2.0 * m);

  vec3 s = aSphere;
  s.xz = rot(uTime * 0.12 + aRand.y * 0.2) * s.xz;
  s.yz = rot(0.35) * s.yz;

  vec3 t = aText;
  t.xy *= uTextScale;
  t.z += sin(uTime * 1.3 + aRand.z * 6.283) * 0.015;
  t.xy += vec2(sin(uTime * 0.9 + aRand.w * 20.0), cos(uTime * 0.8 + aRand.z * 20.0)) * 0.004;

  vec3 p = mix(s, t, m);

  // ~14% of particles are free-floating embers rising like smoke sparks
  float ember = step(0.86, aRand.x);
  float life = fract(aRand.z + uTime * (0.035 + aRand.w * 0.05));
  vec3 e = vec3((aRand.y - 0.5) * 3.4 + sin(uTime * 0.7 + aRand.w * 30.0) * 0.12 * life,
                -1.25 + life * 2.6,
                (aRand.w - 0.5) * 1.2);
  p = mix(p, e, ember);
  vEmber = ember * sin(life * 3.14159);

  // scroll: swirl outwards into a vortex
  float sc = uScroll;
  float r = length(p.xy) + 0.0001;
  float ang = sc * (2.5 + aRand.y * 3.0) / (0.4 + r);
  p.xy = rot(ang) * p.xy;
  p.xy *= 1.0 + sc * (0.6 + aRand.x * 2.2);
  p.z += sc * (aRand.w - 0.5) * 3.0;

  // perspective
  float camZ = 2.6;
  float w = camZ - p.z;
  vec2 clip = p.xy / w * 2.0;
  clip.x /= uAspect;

  // mouse repulsion in clip space
  vec2 dm = clip - uMouse;
  dm.x *= uAspect;
  float dist = length(dm);
  float push = uMouseActive * smoothstep(0.38 * min(uAspect, 1.0), 0.0, dist) * (0.10 + aRand.z * 0.12);
  clip += normalize(dm + 0.0001) * push * vec2(1.0 / uAspect, 1.0);

  gl_Position = vec4(clip, 0.0, 1.0);
  gl_PointSize = uSize * uPixel * (0.55 + aRand.w * 0.9) * (2.6 / w);
  vRand = aRand.y;
  vMix = m;
}`;

const FRAG = `
precision mediump float;
uniform vec3 uColA;
uniform vec3 uColB;
uniform vec3 uColC;
uniform float uAlpha;
varying float vRand;
varying float vMix;
varying float vEmber;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d);
  vec3 col = vRand < 0.55 ? uColA : (vRand < 0.85 ? uColB : uColC);
  float alpha = a * uAlpha * (0.5 + vMix * 0.5);
  if (vEmber > 0.0) { col = uColB; alpha = a * vEmber * 0.9; }
  gl_FragColor = vec4(col, alpha);
}`;

function hex(h) {
  const n = parseInt(h.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function sampleText(word, max) {
  const c = document.createElement("canvas");
  const W = 1400, H = 360;
  c.width = W; c.height = H;
  const x = c.getContext("2d", { willReadFrequently: true });
  x.fillStyle = "#fff";
  x.textAlign = "center";
  x.textBaseline = "middle";
  let size = 300;
  const font = (s) => `800 ${s}px Unbounded, "Arial Black", sans-serif`;
  x.font = font(size);
  try { x.letterSpacing = "-0.02em"; } catch {}
  while (x.measureText(word).width > W * 0.94 && size > 40) x.font = font((size -= 8));
  x.fillText(word, W / 2, H / 2 + size * 0.04);
  const data = x.getImageData(0, 0, W, H).data;
  const pts = [];
  const step = 4;
  for (let y = 0; y < H; y += step)
    for (let xx = 0; xx < W; xx += step)
      if (data[(y * W + xx) * 4 + 3] > 128) pts.push([(xx / W - 0.5) * 2.0, -(y / H - 0.5) * (2.0 * H / W)]);
  // shuffle & cap
  for (let i = pts.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [pts[i], pts[j]] = [pts[j], pts[i]]; }
  return pts.slice(0, max);
}

export async function initParticles(canvas, opts = {}) {
  try { await Promise.race([document.fonts.load('800 120px Unbounded'), new Promise((r) => setTimeout(r, 1500))]); } catch {}
  const gl = canvas.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: false });
  if (!gl) return null;

  const mk = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, mk(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const isSmall = innerWidth < 700;
  const COUNT = isSmall ? 7000 : 16000;
  const textPts = sampleText(opts.word || "THAGOOSE", COUNT);
  const N = COUNT;
  const sphere = new Float32Array(N * 3);
  const text = new Float32Array(N * 3);
  const rand = new Float32Array(N * 4);
  const scale = 1.0;
  for (let i = 0; i < N; i++) {
    // fibonacci-ish random sphere shell
    const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2;
    const rr = 0.85 + Math.random() * 0.25;
    const sq = Math.sqrt(1 - u * u);
    sphere.set([sq * Math.cos(th) * rr, u * rr, sq * Math.sin(th) * rr], i * 3);
    const tp = textPts.length ? textPts[i % textPts.length] : [0, 0];
    const extra = i >= textPts.length ? 0.012 : 0;
    text.set([tp[0] * 1.55 * scale + (Math.random() - 0.5) * extra, tp[1] * 1.55 * scale + 0.08 + (Math.random() - 0.5) * extra, (Math.random() - 0.5) * 0.05], i * 3);
    rand.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
  }
  const attr = (name, arr, size) => {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, arr, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, name);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
  };
  attr("aSphere", sphere, 3);
  attr("aText", text, 3);
  attr("aRand", rand, 4);

  const U = {};
  ["uTextScale", "uTime", "uMix", "uScroll", "uMouse", "uMouseActive", "uAspect", "uSize", "uPixel", "uColA", "uColB", "uColC", "uAlpha"].forEach(
    (n) => (U[n] = gl.getUniformLocation(prog, n))
  );

  const state = { mix: 0, mixTarget: 0, scroll: 0, mouse: [0, 0], mouseT: [0, 0], active: 0, activeT: 0, visible: true, light: false };
  const dpr = Math.min(devicePixelRatio || 1, 2);

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(U.uAspect, w / h);
    // keep the word at ~84% of the viewport width on narrow screens
    gl.uniform1f(U.uTextScale, Math.min(1, (0.84 * 2.6 * (w / h)) / 3.1));
    gl.uniform1f(U.uPixel, dpr);
    gl.uniform1f(U.uSize, isSmall ? 2.4 : 2.6);
  }
  resize();
  addEventListener("resize", resize);

  function setTheme(light) {
    state.light = light;
    gl.enable(gl.BLEND);
    if (light) {
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.uniform3fv(U.uColA, hex("#0b0d12"));
      gl.uniform3fv(U.uColB, hex("#ff5a0a"));
      gl.uniform3fv(U.uColC, hex("#0098b8"));
      gl.uniform1f(U.uAlpha, 0.85);
    } else {
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.uniform3fv(U.uColA, hex("#eef1f5"));
      gl.uniform3fv(U.uColB, hex("#ff6a1a"));
      gl.uniform3fv(U.uColC, hex("#5ee6ff"));
      gl.uniform1f(U.uAlpha, 0.9);
    }
  }
  setTheme(document.documentElement.dataset.theme === "light");

  addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    state.mouseT = [((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1)];
    state.activeT = e.pointerType === "touch" ? 0.6 : 1;
  });
  addEventListener("pointerleave", () => (state.activeT = 0));

  new IntersectionObserver(([en]) => (state.visible = en.isIntersecting)).observe(canvas);

  const t0 = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    if (!state.visible) return;
    state.mix += (state.mixTarget - state.mix) * 0.028;
    state.mouse[0] += (state.mouseT[0] - state.mouse[0]) * 0.12;
    state.mouse[1] += (state.mouseT[1] - state.mouse[1]) * 0.12;
    state.active += (state.activeT - state.active) * 0.08;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(U.uTime, (now - t0) / 1000);
    gl.uniform1f(U.uMix, state.mix);
    gl.uniform1f(U.uScroll, state.scroll);
    gl.uniform2fv(U.uMouse, state.mouse);
    gl.uniform1f(U.uMouseActive, state.active);
    gl.drawArrays(gl.POINTS, 0, N);
  }
  requestAnimationFrame(frame);

  return {
    assemble: () => (state.mixTarget = 1),
    scatter: () => (state.mixTarget = 0),
    setScroll: (v) => (state.scroll = v),
    setTheme,
    // for tests
    _jump: () => (state.mix = state.mixTarget),
  };
}
