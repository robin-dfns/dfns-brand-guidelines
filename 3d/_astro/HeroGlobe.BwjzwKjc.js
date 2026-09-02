const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/GLTFLoader.Daj6mZ2M.js","_astro/three.module.CuzN0wor.js"])))=>i.map(i=>d[i]);
const ie=(function(){const p=typeof document<"u"&&document.createElement("link").relList;return p&&p.supports&&p.supports("modulepreload")?"modulepreload":"preload"})(),le=function(f){return"./"+f},$={},Y=function(p,t,k){let y=Promise.resolve();if(t&&t.length>0){let v=function(a){return Promise.all(a.map(S=>Promise.resolve(S).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};var w=v;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),r=o?.nonce||o?.getAttribute("nonce");y=v(t.map(a=>{if(a=le(a),a in $)return;$[a]=!0;const S=a.endsWith(".css"),x=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${x}`))return;const i=document.createElement("link");if(i.rel=S?"stylesheet":ie,S||(i.as="script"),i.crossOrigin="",i.href=a,r&&i.setAttribute("nonce",r),document.head.appendChild(i),S)return new Promise((b,E)=>{i.addEventListener("load",b),i.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${a}`)))})}))}function g(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return y.then(o=>{for(const r of o||[])r.status==="rejected"&&g(r.reason);return p().catch(g)})},de=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,he=`
  precision highp float;

  uniform sampler2D tScene;
  uniform vec2 resolution;
  uniform float hexSize;
  uniform vec3 hexColor;
  uniform float uTime;

  varying vec2 vUv;

  // Pseudo-random hash from hex center — well distributed
  float hash(vec2 p) {
    vec2 q = fract(p * vec2(0.1031, 0.1030));
    q += dot(q, q.yx + 33.33);
    return fract((q.x + q.y) * q.x);
  }

  // Nearest hex center in a pointy-top honeycomb grid
  // Returns vec3(centerX, centerY, distToCenter)
  vec3 nearestHex(vec2 p, float size) {
    float sqrt3 = 1.7320508;
    // Pointy-top hex: col spacing = size*sqrt3, row spacing = size*1.5
    float colW = size * sqrt3;
    float rowH = size * 1.5;

    // Two candidate rows
    float row1 = floor(p.y / rowH);
    float row2 = row1 + 1.0;

    // Offset for odd rows
    float off1 = mod(row1, 2.0) * 0.5 * colW;
    float off2 = mod(row2, 2.0) * 0.5 * colW;

    float col1 = floor((p.x - off1) / colW);
    float col2 = floor((p.x - off2) / colW);

    // 4 candidate centers
    vec2 c1 = vec2((col1 + 0.5) * colW + off1, (row1 + 0.5) * rowH);
    vec2 c2 = vec2((col1 + 1.5) * colW + off1, (row1 + 0.5) * rowH);
    vec2 c3 = vec2((col2 + 0.5) * colW + off2, (row2 + 0.5) * rowH);
    vec2 c4 = vec2((col2 + 1.5) * colW + off2, (row2 + 0.5) * rowH);

    float d1 = length(p - c1);
    float d2 = length(p - c2);
    float d3 = length(p - c3);
    float d4 = length(p - c4);

    float dMin = min(min(d1, d2), min(d3, d4));
    vec2 cMin = d1 == dMin ? c1 : d2 == dMin ? c2 : d3 == dMin ? c3 : c4;

    return vec3(cMin, dMin);
  }

  // Regular hexagon SDF (pointy-top), perfect proportions
  float hexSDF(vec2 p, float r) {
    float sqrt3 = 1.7320508;
    p = abs(p);
    return max(dot(p, vec2(sqrt3 * 0.5, 0.5)) - r, p.y - r * 0.866025);
  }

  void main() {
    vec2 px = vUv * resolution;
    vec4 scene = texture2D(tScene, vUv);

    // Find nearest hex center (always, even outside globe)
    vec3 hex = nearestHex(px, hexSize);
    vec2 hexCenter = hex.xy;

    float fillRatio;

    float lum = dot(scene.rgb, vec3(0.299, 0.587, 0.114));

    // Dark continents → big hex, light grey bg/oceans → small hex
    float dark = 1.0 - lum;
    fillRatio = mix(0.15, 0.9, smoothstep(0.1, 0.7, dark));

    // Subtle pulse — some hexagons breathe slightly
    float h = hash(hexCenter);
    float h2 = hash(hexCenter * 7.31 + 53.7);
    float isContinent = step(0.75, fillRatio);
    // Hotspots only — no pulsation outside defined zones
    float hot = 0.0;
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.727, 0.678))));  // France
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.706, 0.632))));  // Spain
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.710, 0.736))));  // UK
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.779, 0.777))));  // Scandinavia
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.782, 0.649))));  // Italy
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.799, 0.437))));  // Africa
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.700, 0.600))));  // Morocco
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.760, 0.610))));  // Tunisia
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.864, 0.574))));  // Middle East
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.51, 0.64))));   // US East Coast — New York
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.38, 0.63))));   // US West Coast — San Francisco
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.590, 0.355))));  // South America — north
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.565, 0.230))));  // South America — center
    hot = max(hot, smoothstep(0.03, 0.0, length(vUv - vec2(0.540, 0.125))));  // South America — south

    float threshold = mix(1.0, 0.76, hot);

    float pulseFade = smoothstep(0.0, 3.0, uTime);
    float pulse = max(0.0, sin(uTime * (0.4 + h2 * 1.6) + h2 * 6.2831)) * 0.30 * step(threshold, h) * isContinent * pulseFade;

    // Hexagon shape — radius proportional to fill + pulse
    float radius = hexSize * 0.5 * (fillRatio + pulse);
    vec2 toCenter = px - hexCenter;
    float d = hexSDF(toCenter, radius);

    // Anti-aliased edge
    float alpha = 1.0 - smoothstep(-0.6, 0.6, d);

    gl_FragColor = vec4(hexColor, alpha);
  }
`;async function K(){const f=document.querySelector(".hero-globe"),p=document.getElementById("hero-globe-canvas");if(!f||!p||window.matchMedia("(max-width: 768px)").matches)return;const t=await Y(()=>import("./three.module.CuzN0wor.js"),[]),{GLTFLoader:k}=await Y(async()=>{const{GLTFLoader:e}=await import("./GLTFLoader.Daj6mZ2M.js");return{GLTFLoader:e}},__vite__mapDeps([0,1])),y=f.dataset.bare!==void 0,g=f.dataset.centered!==void 0;let w=Math.min(window.devicePixelRatio,2);const o=new t.WebGLRenderer({canvas:p,alpha:!0,antialias:!0});o.setPixelRatio(w),o.setClearColor(0,0);const r=new t.Scene,v=new t.PerspectiveCamera(45,1,.1,100);v.position.set(0,5,0),v.lookAt(0,0,0);const a=new t.Group;r.add(a),new k().load("./three-js/world_map.glb",e=>{const n=e.scene,c=new t.Box3().setFromObject(n).getSize(new t.Vector3),m=9.24/Math.max(c.x,c.y,c.z);n.scale.setScalar(m),n.scale.x*=1.2;const u=new t.Box3().setFromObject(n).getCenter(new t.Vector3);n.position.sub(u),n.traverse(C=>{C.isMesh&&(C.material=new t.MeshBasicMaterial({color:0}))}),a.add(n)});const x=new t.DirectionalLight(16777215,5);x.position.set(2,8,1),r.add(x),r.add(new t.AmbientLight(16777215,.05));let i=1,b=1;const E=new t.WebGLRenderTarget(i,b,{samples:4}),H=new t.Scene,J=new t.OrthographicCamera(-1,1,1,-1,0,1),T=new t.ShaderMaterial({vertexShader:de,fragmentShader:he,transparent:!0,uniforms:{tScene:{value:E.texture},resolution:{value:new t.Vector2(i,b)},hexSize:{value:2.5*w},hexColor:{value:new t.Color("#AEB1C9")},uTime:{value:0}}});H.add(new t.Mesh(new t.PlaneGeometry(2,2),T));function z(){const e=f.getBoundingClientRect();!e.width||!e.height||(w=Math.min(window.devicePixelRatio,2),o.setPixelRatio(w),i=Math.floor(e.width*w),b=Math.floor(e.height*w),o.setSize(e.width,e.height,!1),E.setSize(i,b),T.uniforms.resolution.value.set(i,b),T.uniforms.hexSize.value=2.5*w,v.aspect=e.width/e.height,v.updateProjectionMatrix())}z(),window.addEventListener("resize",z);const M=new t.Group;M.visible=!1,r.add(M);let I=!1;const Q=2;let O=0;const ee=new t.MeshBasicMaterial({color:0});function L(e,n){const l=5*Math.tan(Math.PI/8),c=l*v.aspect;return new t.Vector3((e*2-1)*c,.01,-(n*2-1)*l)}const U=[.525,.64],R=[.719,.716];function N(e,n,l){const c=n.clone().sub(e),h=Math.abs(l?c.x:c.z);if(h<.001)return;const m=e.clone().add(n).multiplyScalar(.5),d=new t.PlaneGeometry(h,.015),u=new t.Mesh(d,ee);u.position.copy(m),u.rotation.x=-Math.PI/2,l||(u.rotation.z=Math.PI/2),M.add(u)}function te(e){if(M.clear(),e<=0)return;const n=L(U[0],U[1]),l=L(R[0],R[1]),c=(U[0]+R[0])/2,h=L(c,U[1]),m=L(c,R[1]),d=[{a:n,b:h,h:!0},{a:h,b:m,h:!1},{a:m,b:l,h:!0}],u=d.map(s=>s.h?Math.abs(s.b.x-s.a.x):Math.abs(s.b.z-s.a.z)),C=u.reduce((s,_)=>s+_,0);let W=0;for(let s=0;s<d.length;s++){const _=u[s]/C,X=W,Z=W+_;if(e<=X)break;if(e>=Z)N(d[s].a,d[s].b,d[s].h);else{const re=(e-X)/_,ce=d[s].a.clone().lerp(d[s].b,re);N(d[s].a,ce,d[s].h)}W=Z}}const B=g?0:2,oe=g?0:2.5,V=g?0:-.1,ne=g?0:-.3,q=6,se=performance.now()/1e3;function G(e){return 1-Math.pow(1-e,3)}let A=!1,D=!1;function j(){if(!A){D=!1;return}requestAnimationFrame(j);const e=performance.now()/1e3-se,n=Math.min(1,e/q),l=G(n),c=B+(oe-B)*l,h=V+(ne-V)*l;a.position.x=c,a.position.z=h,a.rotation.set(0,0,0);const m=q+1,d=Math.max(0,e-m);if(T.uniforms.uTime.value=d,I){const u=Math.min(1,(performance.now()/1e3-O)/Q),C=G(u);te(C)}o.setRenderTarget(E),o.setClearColor(13356247,1),o.clear(),o.render(r,v),o.setRenderTarget(null),o.setClearColor(0,0),o.clear(),o.render(H,J)}function ae(){!D&&A&&(D=!0,requestAnimationFrame(j))}new IntersectionObserver(e=>{A=e[0].isIntersecting,A&&(z(),ae())},{threshold:0}).observe(f);const F=(q+2)*1e3;y||setTimeout(()=>{document.querySelectorAll(".map-marker").forEach(e=>e.classList.add("visible"))},F),y||setTimeout(()=>{M.visible=!0,I=!0,O=performance.now()/1e3},F+2e3);const P=document.getElementById("code-window");y||setTimeout(()=>{P?.classList.add("visible");const e=P?.querySelectorAll(".code-line"),n=e?.length||0;e?.forEach((h,m)=>{setTimeout(()=>h.classList.add("typed"),400+m*250)});const l=400+n*250+1500;setTimeout(()=>{P?.querySelector(".code-scroll")?.classList.add("scrolled")},l);const c=l+4e3;setTimeout(()=>{P?.classList.add("hidden"),document.querySelectorAll(".map-marker").forEach(h=>h.classList.add("hidden")),M.visible=!1},c)},F+1500)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K();
