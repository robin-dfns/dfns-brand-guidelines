const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/FBXLoader.efWZ4pLK.js","_astro/three.module.CuzN0wor.js"])))=>i.map(i=>d[i]);
import{_ as xe}from"./preload-helper.CVfkMyKi.js";import{WebGLRenderer as Me,Scene as re,PerspectiveCamera as Se,Group as be,MeshStandardMaterial as we,Mesh as ce,LoadingManager as Ae,Box3 as le,Vector3 as de,Sphere as ye,DirectionalLight as O,AmbientLight as _e,WebGLRenderTarget as Le,OrthographicCamera as Ee,ShaderMaterial as Ce,Color as _,Vector2 as Y,PlaneGeometry as ze,Shape as De,ExtrudeGeometry as Fe}from"./three.module.CuzN0wor.js";import{GLTFLoader as Re}from"./GLTFLoader.Daj6mZ2M.js";const Ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";function Ye(){const a=new De,n=1,w=.075,d=6,c=Math.PI*2/d,v=0,s=[];for(let r=0;r<d;r++){const g=v+r*c;s.push(new Y(n*Math.cos(g),n*Math.sin(g)))}for(let r=0;r<d;r++){const g=s[(r-1+d)%d],p=s[r],L=s[(r+1)%d],E=new Y().subVectors(g,p).normalize(),x=new Y().subVectors(L,p).normalize(),h=p.clone().addScaledVector(E,w),S=p.clone().addScaledVector(x,w);r===0?a.moveTo(h.x,h.y):a.lineTo(h.x,h.y),a.quadraticCurveTo(p.x,p.y,S.x,S.y)}a.closePath();const m=new Fe(a,{depth:.25,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:4});return m.translate(0,0,-.125),m}const Pe=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,Xe=`
  precision highp float;

  uniform sampler2D tScene;
  uniform vec2 resolution;
  uniform float lineSpacing;
  uniform float lineWidth;

  uniform vec3 colorHighlight;
  uniform vec3 colorBright;
  uniform vec3 colorMidLight;
  uniform vec3 colorMidShadow;
  uniform vec3 colorLine;

  varying vec2 vUv;

  void main() {
    vec4 scene = texture2D(tScene, vUv);
    vec2 px = 1.0 / resolution;

    if (scene.a < 0.01) { discard; }

    // Silhouette outline (Sobel on alpha)
    float a_tl = texture2D(tScene, vUv + vec2(-px.x,  px.y)).a;
    float a_t  = texture2D(tScene, vUv + vec2(  0.0,  px.y)).a;
    float a_tr = texture2D(tScene, vUv + vec2( px.x,  px.y)).a;
    float a_l  = texture2D(tScene, vUv + vec2(-px.x,   0.0)).a;
    float a_r  = texture2D(tScene, vUv + vec2( px.x,   0.0)).a;
    float a_bl = texture2D(tScene, vUv + vec2(-px.x, -px.y)).a;
    float a_b  = texture2D(tScene, vUv + vec2(  0.0, -px.y)).a;
    float a_br = texture2D(tScene, vUv + vec2( px.x, -px.y)).a;
    float sobelX = -a_tl - 2.0*a_l - a_bl + a_tr + 2.0*a_r + a_br;
    float sobelY = -a_tl - 2.0*a_t - a_tr + a_bl + 2.0*a_b + a_br;
    float edgeMask = smoothstep(0.1, 0.25, length(vec2(sobelX, sobelY)));

    // Luminosity & aplats
    float lum = dot(scene.rgb, vec3(0.299, 0.587, 0.114));
    float t1 = smoothstep(0.75, 0.81, lum);
    float t2 = smoothstep(0.55, 0.61, lum);
    float t3 = smoothstep(0.35, 0.41, lum);
    vec3 bg = mix(
      mix(colorMidShadow, colorMidLight, t3),
      mix(colorBright, colorHighlight, t1),
      t2
    );

    // Diagonal hatching (+45deg)
    vec2 pxCoord = vUv * resolution;
    float diagonal = 0.7071 * (pxCoord.x - pxCoord.y);
    float dist = abs(mod(diagonal, lineSpacing) - lineSpacing * 0.5);
    float lineMask = 1.0 - smoothstep(lineWidth * 0.5 - 0.6, lineWidth * 0.5 + 0.6, dist);
    float shadowMask = smoothstep(0.62, 0.28, lum);

    // Compose
    vec3 color = bg;
    color = mix(color, colorLine, lineMask * shadowMask);
    color = mix(color, colorLine, edgeMask);

    gl_FragColor = vec4(color, 1.0);
  }
`;function Be(a){const n=JSON.parse(a.dataset.gravure||"{}"),w=a.querySelector("canvas");if(!w)return;const d=Math.min(window.devicePixelRatio,2),c=new Me({canvas:w,alpha:!0,antialias:!0});c.setPixelRatio(d),c.setClearColor(0,0);const v=new re,s=new Se(40,1,.1,100);s.position.set(0,0,4);const m=new be;v.add(m);const r=new we({color:16777215,roughness:.55,metalness:.05});if(n.geometry==="hex")m.add(new ce(Ye(),r));else if(n.model)if(/\.fbx$/i.test(n.model)){const e=new Ae;e.setURLModifier(o=>/\.fbx$/i.test(o)?o:Ue),xe(async()=>{const{FBXLoader:o}=await import("./FBXLoader.efWZ4pLK.js");return{FBXLoader:o}},__vite__mapDeps([0,1])).then(({FBXLoader:o})=>{new o(e).load(n.model,$=>g($,"none"))})}else new Re().load(n.model,e=>g(e.scene,n.maps||"all"));function g(e,o){const V=new le().setFromObject(e).getSize(new de),me=1.54/Math.max(V.x,V.y,V.z)*(n.scale||1);e.scale.setScalar(me);const I=new le().setFromObject(e),fe=I.getCenter(new de);if(e.position.sub(fe),n.fit==="orbit"){const f=s.fov*Math.PI/180/2,b=Math.atan(Math.tan(f)*s.aspect),t=I.getBoundingSphere(new ye).radius;s.position.z=t/Math.sin(Math.min(f,b))*1.04}else if(n.scale&&n.scale!==1){const f=s.fov*Math.PI/180/2,b=Math.atan(Math.tan(f)*s.aspect),t=n.rotX??.4,i=n.rotY??0,Q=Math.cos(t),Z=Math.sin(t),ee=Math.cos(i),te=Math.sin(i),{min:R,max:U}=I,oe=[];for(const M of[R.x,U.x])for(const u of[R.y,U.y])for(const l of[R.z,U.z])oe.push({x:M,y:u,z:l});const G=M=>{let u=.01;for(const l of oe){const ue=l.x*ee+l.z*te,se=-l.x*te+l.z*ee,ge=(l.y+M)*Q-se*Z,ie=(l.y+M)*Z+se*Q;u=Math.max(u,ie+Math.abs(ue)/Math.tan(b),ie+Math.abs(ge)/Math.tan(f))}return u},ne=Math.max(Math.abs(R.y),Math.abs(U.y));let A=-ne,y=ne;for(let M=0;M<40;M++){const u=A+(y-A)/3,l=y-(y-A)/3;G(u)<G(l)?y=l:A=u}const ae=(A+y)/2;e.position.y+=ae,s.position.z=G(ae)*1.12}e.traverse(f=>{if(f.isMesh){const b=f,t=b.material,i=r.clone();o!=="none"&&(o==="all"&&t.map&&(i.map=t.map),t.normalMap&&(i.normalMap=t.normalMap,i.normalScale.copy(t.normalScale)),t.bumpMap&&(i.bumpMap=t.bumpMap,i.bumpScale=t.bumpScale),t.displacementMap&&(i.displacementMap=t.displacementMap,i.displacementScale=t.displacementScale),t.aoMap&&(i.aoMap=t.aoMap),t.metalnessMap&&(i.metalnessMap=t.metalnessMap),t.roughnessMap&&(i.roughnessMap=t.roughnessMap)),b.material=i}}),m.add(e)}const p=new O(16777215,4);p.position.set(3,4,5),v.add(p);const L=new O(16777215,2);L.position.set(0,0,6),v.add(L);const E=new O(16777215,.1);E.position.set(-3,-1,2),v.add(E),v.add(new _e(16777215,.05));let x=1,h=1;const S=new Le(x,h,{samples:4}),k=new re,pe=new Ee(-1,1,1,-1,0,1),H=new Ce({vertexShader:Pe,fragmentShader:Xe,transparent:!0,uniforms:{tScene:{value:S.texture},resolution:{value:new Y(x,h)},lineSpacing:{value:10},lineWidth:{value:1.4},colorHighlight:{value:new _("#F0F1F4")},colorBright:{value:new _("#E8EAF0")},colorMidLight:{value:new _("#E3E4EB")},colorMidShadow:{value:new _("#D7D8E1")},colorLine:{value:new _("#AEB1C9")}}});k.add(new ce(new ze(2,2),H));function P(){const e=a.getBoundingClientRect();!e.width||!e.height||(x=Math.floor(e.width*d),h=Math.floor(e.height*d),c.setSize(e.width,e.height,!1),S.setSize(x,h),H.uniforms.resolution.value.set(x,h),s.aspect=e.width/e.height,s.updateProjectionMatrix())}P(),window.addEventListener("resize",P);let C=!1,X=0,B=0,z=0,D=0,W=n.rotX??.4,q=n.rotY??0;const N=.006,j=.94;a.addEventListener("pointerdown",e=>{const o=e;C=!0,X=o.clientX,B=o.clientY,z=D=0,a.setPointerCapture(o.pointerId)}),a.addEventListener("pointermove",e=>{if(!C)return;const o=e;D=(o.clientX-X)*N,z=(o.clientY-B)*N,X=o.clientX,B=o.clientY});const J=()=>{C=!1};a.addEventListener("pointerup",J),a.addEventListener("pointercancel",J);let F=!1,T=!1;function K(){if(!F){T=!1;return}requestAnimationFrame(K),C||(z*=j,D*=j),W+=z,q+=D,m.rotation.x=W,m.rotation.y=q,c.setRenderTarget(S),c.clear(),c.render(v,s),c.setRenderTarget(null),c.clear(),c.render(k,pe)}function ve(){!T&&F&&(T=!0,requestAnimationFrame(K))}new IntersectionObserver(e=>{F=e[0].isIntersecting,F&&(P(),ve())},{threshold:0}).observe(a)}function he(){document.querySelectorAll("[data-gravure]").forEach(Be)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",he):he();
