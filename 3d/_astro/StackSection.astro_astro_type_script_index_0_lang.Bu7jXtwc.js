import{WebGLRenderer as He,Scene as V,PerspectiveCamera as Ae,Group as _,MeshStandardMaterial as h,LineBasicMaterial as qe,Mesh as S,LineSegments as Z,EdgesGeometry as O,DirectionalLight as E,AmbientLight as Ge,WebGLRenderTarget as re,OrthographicCamera as ie,ShaderMaterial as le,Color as r,Vector2 as b,PlaneGeometry as ce,Shape as We,ExtrudeGeometry as Ve}from"./three.module.CuzN0wor.js";function Ze(){const i=new We,M=1,m=.075,v=6,y=Math.PI*2/v,p=[];for(let e=0;e<v;e++){const o=e*y+Math.PI/6;p.push(new b(M*Math.cos(o),M*Math.sin(o)))}for(let e=0;e<v;e++){const o=p[(e-1+v)%v],n=p[e],s=p[(e+1)%v],R=new b().subVectors(o,n).normalize(),k=new b().subVectors(s,n).normalize(),w=n.clone().addScaledVector(R,m),l=n.clone().addScaledVector(k,m);e===0?i.moveTo(w.x,w.y):i.lineTo(w.x,w.y),i.quadraticCurveTo(n.x,n.y,l.x,l.y)}i.closePath();const f=new Ve(i,{depth:.14,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:1});return f.translate(0,0,-.07),f}const de=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,ue=`
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
    float lum = dot(scene.rgb, vec3(0.299, 0.587, 0.114));
    float t1 = smoothstep(0.75, 0.81, lum);
    float t2 = smoothstep(0.55, 0.61, lum);
    float t3 = smoothstep(0.35, 0.41, lum);
    vec3 bg = mix(
      mix(colorMidShadow, colorMidLight, t3),
      mix(colorBright, colorHighlight, t1),
      t2
    );
    vec2 pxCoord = vUv * resolution;
    float diagonal = 0.7071 * (pxCoord.x - pxCoord.y);
    float dist = abs(mod(diagonal, lineSpacing) - lineSpacing * 0.5);
    float lineMask = 1.0 - smoothstep(lineWidth * 0.5 - 0.6, lineWidth * 0.5 + 0.6, dist);
    float hatchIntensity = mix(0.7, 0.15, smoothstep(0.35, 0.85, lum));
    vec3 color = bg;
    color = mix(color, colorLine, lineMask * hatchIntensity);
    color = mix(color, colorLine, edgeMask);
    gl_FragColor = vec4(color, 1.0);
  }
`,B=document.getElementById("stack-gravure"),he=document.getElementById("stack-canvas");if(B&&he){let i=function(){const t=B.getBoundingClientRect();t.width===0||t.height===0||(d=Math.floor(t.width*f),u=Math.floor(t.height*f),e.setSize(t.width,t.height,!1),z.setSize(d,u),I.setSize(d,u),K.uniforms.resolution.value.set(d,u),$.uniforms.resolution.value.set(d,u),n.aspect=t.width/t.height,n.updateProjectionMatrix())},M=function(){const t=Ee.getBoundingClientRect(),g=window.innerHeight,C=t.height-g;return C<=0?0:Math.max(0,Math.min(1,-t.top/C))},m=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},v=function(){if(!ee||!te||!oe||!ne)return;const t=ne.getBoundingClientRect(),g=ee.getBoundingClientRect();te.style.top=g.top-t.top+"px",oe.style.top=g.bottom-t.top+"px"},y=function(){if(!L){P=!1;return}requestAnimationFrame(y),v();const t=M(),g=Math.min(1,t/.25),C=m(g)*Be;s.rotation.x=C,s.rotation.y=0;const Re=Math.max(0,Math.min(1,(t-.25)/.5)),T=m(Re);a.visible=!0,c.visible=!0;const U=performance.now()*.001,F=(1-T)*.03,ke=Math.sin(U*1.2)*F,De=Math.sin(U*1.5+1)*F,ze=Math.sin(U*1+2)*F;x.position.set(0,0,ke);const se=1;a.position.set(0,0,se+(.5-se)*T+De);const ae=-1;c.position.set(0,0,ae+(-.5-ae)*T+ze);const Ie=Math.max(0,Math.min(1,(g-.5)/.5)),Pe=70*(1-m(Ie));B.style.transform="translateX("+Pe+"px)";const H=document.getElementById("label-hex1"),A=document.getElementById("label-hex2"),q=document.getElementById("label-hex3"),G=g>.7,Te=a.position.z,Ue=c.position.z,W=Fe=>50-Fe*20;H&&(H.style.top=W(0)+"%",H.classList.toggle("visible",G)),A&&(A.style.top=W(Te)+"%",A.classList.toggle("visible",G)),q&&(q.style.top=W(Ue)+"%",q.classList.toggle("visible",G)),a.visible=!1,e.setRenderTarget(z),e.clear(),e.render(o,n),x.visible=!1,c.visible=!1,a.visible=!0,e.setRenderTarget(I),e.clear(),e.render(o,n),x.visible=!0,a.visible=!0,c.visible=!0,e.setRenderTarget(null),e.clear(),e.render(J,Ce),e.autoClear=!1,e.render(Q,_e),e.autoClear=!0},p=function(){!P&&L&&(P=!0,requestAnimationFrame(y))};const f=Math.min(window.devicePixelRatio,2),e=new He({canvas:he,alpha:!0,antialias:!0});e.setPixelRatio(f),e.setClearColor(0,0);const o=new V,n=new Ae(40,1,.1,100);n.position.set(0,0,4);const s=new _;s.scale.setScalar(.6),s.position.x=0,o.add(s);const R=new h({color:12962270,roughness:.2,metalness:.15,flatShading:!0}),k=new h({color:14145761,roughness:.15,metalness:.2,flatShading:!0}),w=new h({color:14935275,roughness:.25,metalness:.1,flatShading:!0}),l=Ze(),D=new qe({color:12962270,transparent:!0,opacity:.8}),ve=new S(l,[R.clone(),k.clone(),w.clone()]),ge=new Z(new O(l,15),D.clone()),x=new _;x.add(ve,ge),s.add(x);const me=new h({color:16119288,roughness:.1,metalness:.05,flatShading:!0}),pe=new h({color:16777215,roughness:.05,metalness:0,flatShading:!0}),fe=new h({color:15790580,roughness:.15,metalness:.05,flatShading:!0}),we=new S(l,[me,pe,fe]),xe=new Z(new O(l,15),D.clone()),a=new _;a.add(we,xe),a.scale.setScalar(.92),a.visible=!1,s.add(a);const Se=new h({color:5725307,roughness:.15,metalness:.3,flatShading:!0}),be=new h({color:9080230,roughness:.1,metalness:.35,flatShading:!0}),Me=new h({color:11448777,roughness:.2,metalness:.25,flatShading:!0}),ye=new S(l,[Se,be,Me]),Le=new Z(new O(l,15),D.clone()),c=new _;c.add(ye,Le),c.scale.setScalar(1.06),c.visible=!1,s.add(c);const X=new E(16777215,6);X.position.set(3,5,4),o.add(X);const Y=new E(16777215,3);Y.position.set(0,0,6),o.add(Y);const j=new E(16777215,2);j.position.set(-4,-2,-3),o.add(j);const N=new E(16777215,2.5);N.position.set(0,6,0),o.add(N),o.add(new Ge(16777215,.08));let d=1,u=1;const z=new re(d,u,{samples:4}),J=new V,Ce=new ie(-1,1,1,-1,0,1),K=new le({vertexShader:de,fragmentShader:ue,transparent:!0,uniforms:{tScene:{value:z.texture},resolution:{value:new b(d,u)},lineSpacing:{value:10},lineWidth:{value:1.4},colorHighlight:{value:new r("#D7D8E1")},colorBright:{value:new r("#C5C9DE")},colorMidLight:{value:new r("#AEB1C9")},colorMidShadow:{value:new r("#8A8DA6")},colorLine:{value:new r("#575C7B")}}});J.add(new S(new ce(2,2),K));const I=new re(d,u,{samples:4}),Q=new V,_e=new ie(-1,1,1,-1,0,1),$=new le({vertexShader:de,fragmentShader:ue,transparent:!0,uniforms:{tScene:{value:I.texture},resolution:{value:new b(d,u)},lineSpacing:{value:10},lineWidth:{value:1.4},colorHighlight:{value:new r("#F5F5F8")},colorBright:{value:new r("#F0F1F4")},colorMidLight:{value:new r("#E8EAF0")},colorMidShadow:{value:new r("#E3E4EB")},colorLine:{value:new r("#AEB1C9")}}});Q.add(new S(new ce(2,2),$)),i(),window.addEventListener("resize",i);const Ee=document.querySelector(".stack-section"),Be=-1.149,ee=document.querySelector(".stack-divider"),te=document.querySelector(".stack-hr--top"),oe=document.querySelector(".stack-hr--bottom"),ne=document.querySelector(".stack-sticky");let L=!1,P=!1;new IntersectionObserver(t=>{L=t[0].isIntersecting,L&&(i(),p())},{threshold:0}).observe(B)}
