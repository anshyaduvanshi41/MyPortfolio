// Typewriter effect
(function(){
  const el=document.getElementById('typewriter-text');
  const cursor=document.querySelector('.typewriter-cursor');
  const phrases=['Software Development Engineer','Full Stack Developer','Backend Developer','Problem Solver'];
  let pi=0,ci=0,deleting=false;
  function tick(){
    const full=phrases[pi];
    el.textContent=deleting?full.slice(0,ci--):full.slice(0,ci++);
    // apply gradient via class
    el.style.background='linear-gradient(90deg,var(--orange),var(--yellow))';
    el.style.webkitBackgroundClip='text';
    el.style.webkitTextFillColor='transparent';
    el.style.backgroundClip='text';
    let delay=deleting?60:100;
    if(!deleting&&ci>full.length){delay=1800;deleting=true;}
    else if(deleting&&ci<0){deleting=false;pi=(pi+1)%phrases.length;ci=0;delay=400;}
    setTimeout(tick,delay);
  }
  tick();
})();
const services=[
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/java/java-original.svg',name:'Java Development',level:'Primary',accent:'linear-gradient(90deg,#e76f2a,#f7a34b)',iconbg:'#fff3eb',desc:'Strong in Core Java, OOP principles, and building backend logic. Experienced in writing clean, maintainable, production-ready code.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/html5/html5-original.svg',name:'Frontend Development',level:'Proficient',accent:'linear-gradient(90deg,#e44d26,#f96529)',iconbg:'#fff0ee',desc:'Building responsive UIs using React.js, HTML5, CSS3, JavaScript with cross-browser compatibility and mobile-first design.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nodejs/nodejs-original.svg',name:'Backend & REST APIs',level:'Primary',accent:'linear-gradient(90deg,#3c873a,#68a063)',iconbg:'#edfaed',desc:'Designing scalable RESTful APIs using Python (FastAPI), Node.js, Express.js with proper routing, validation, and error handling.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/postgresql/postgresql-original.svg',name:'SQL & Databases',level:'Proficient',accent:'linear-gradient(90deg,#336791,#5b9bd5)',iconbg:'#edf4fb',desc:'Writing complex SQL queries, designing schemas, and integrating relational databases with backend applications efficiently.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/googlecloud/googlecloud-original.svg',name:'Cloud Computing',level:'Familiar',accent:'linear-gradient(90deg,#4285f4,#34a853)',iconbg:'#eef4ff',desc:'Certified in Microsoft Azure AI Fundamentals and NPTEL Cloud Computing. Familiar with CI/CD pipelines, Git, GitHub, and Linux.'},
  {devicon:'https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg',name:'DSA & Problem Solving',level:'Primary',accent:'linear-gradient(90deg,#ffa116,#ffc300)',iconbg:'#fff8eb',desc:'Solved 300+ problems on Arrays, Strings, Hashing, Stacks, Trees, and DP. Participated in 15+ coding contests on LeetCode & more.'}
];
const projects=[
  {
    gradient:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><rect x="24" y="10" width="32" height="38" rx="6" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/><rect x="28" y="30" width="24" height="24" rx="5" fill="rgba(255,107,28,0.25)" stroke="rgba(255,107,28,0.7)" stroke-width="1.5"/><circle cx="40" cy="42" r="4" fill="rgba(255,195,0,0.9)"/><line x1="40" y1="46" x2="40" y2="50" stroke="rgba(255,195,0,0.9)" stroke-width="2" stroke-linecap="round"/></svg>`,
    type:'Personal',tags:['React Native','TypeScript','React Hooks'],
    title:'Passwordless OTP Auth App',
    desc:'A mobile app that lets users log in with a one-time code sent to their email — no passwords needed. Built with React Native, it handles code expiry, failed attempt limits, and keeps you logged in between sessions.',
    code:'https://github.com/anshyaduvanshi41/OTPAuthSystem.git',live:''
  },
  {
    gradient:'linear-gradient(135deg,#0d1b2a 0%,#1b4332 50%,#0a3622 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><circle cx="40" cy="40" r="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/><circle cx="40" cy="40" r="10" stroke="rgba(52,211,153,0.6)" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="rgba(52,211,153,0.9)"/><line x1="40" y1="10" x2="40" y2="22" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="40" y1="58" x2="40" y2="70" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="10" y1="40" x2="22" y2="40" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="58" y1="40" x2="70" y2="40" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/></svg>`,
    type:'Personal',tags:['Python','FastAPI','REST API','Cloud'],
    title:'API Traffic Spike Simulator',
    desc:'A tool that sends hundreds of requests to an API at once to see how it handles heavy traffic. Built with Python & FastAPI to help catch performance issues before they become real problems in production.',
    code:'https://github.com/anshyaduvanshi41/CloudFunctionExpolitDetection.git',live:''
  },
  {
    gradient:'linear-gradient(135deg,#2d1b69 0%,#11998e 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><rect x="14" y="20" width="22" height="22" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><rect x="44" y="20" width="22" height="22" rx="4" fill="rgba(255,107,28,0.2)" stroke="rgba(255,107,28,0.6)" stroke-width="1.5"/><rect x="14" y="50" width="22" height="14" rx="4" fill="rgba(255,195,0,0.15)" stroke="rgba(255,195,0,0.5)" stroke-width="1.5"/><rect x="44" y="50" width="22" height="14" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><circle cx="25" cy="31" r="5" fill="rgba(255,255,255,0.3)"/><circle cx="55" cy="31" r="5" fill="rgba(255,107,28,0.7)"/></svg>`,
    type:'Personal',tags:['React.js','JavaScript','HTML5','CSS3'],
    title:'ART-INT: AI Based Art Gallery',
    desc:'An online gallery where artists can upload and showcase their digital artwork. Built with React.js — visitors can browse by category, filter by style, and explore pieces in a clean, smooth interface.',
    code:'https://github.com/anshyaduvanshi41/ART-INT-an-AI-based-Art-Gallery.git',live:''
  }
];
function renderSkills(){document.getElementById('skills-grid').innerHTML=services.map(s=>`<div class="skill-card fu" style="--card-accent:${s.accent};"><div class="skill-icon-wrap" style="background:${s.iconbg};"><img src="${s.devicon}" alt="${s.name}" style="width:30px;height:30px;object-fit:contain;"/></div><div class="skill-body"><div class="skill-top"><div class="skill-name">${s.name}</div><span class="skill-level ${s.level.toLowerCase()}">${s.level}</span></div><div class="skill-desc">${s.desc}</div></div></div>`).join('');observe();}
function renderProjects(filter='all'){
  const f=filter==='all'?projects:projects.filter(p=>p.type===filter);
  document.getElementById('projects-grid').innerHTML=f.map(p=>`<div class="proj-card fu"><div class="proj-cover" style="background:${p.gradient}">${p.svgicon}<div class="proj-badge">${p.type}</div><div class="proj-cover-title">${p.title}</div></div><div class="proj-body"><div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div><div class="proj-title">${p.title}</div><div class="proj-desc">${p.desc}</div><div class="proj-links">${p.code?`<a href="${p.code}" target="_blank" class="proj-link code"><i class="fab fa-github"></i> GitHub</a>`:''}</div></div></div>`).join('');
  observe();
}
function filterProj(f,btn){document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProjects(f);}
function upImg(id){const i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=e=>{const r=new FileReader();r.onload=ev=>document.getElementById(id).src=ev.target.result;r.readAsDataURL(e.target.files[0]);};i.click();}
async function fSend(e){e.preventDefault();const b=document.getElementById('send-btn');const form=e.target;b.textContent='Sending...';b.disabled=true;try{const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(r.ok){b.textContent='✓ Message Sent!';b.style.background='#22c55e';form.reset();setTimeout(()=>{b.textContent='Send Message';b.style.background='';b.disabled=false;},3500);}else{throw new Error('Failed');}}catch{b.textContent='✗ Error — try again';b.style.background='#ef4444';setTimeout(()=>{b.textContent='Send Message';b.style.background='';b.disabled=false;},3000);}}
window.addEventListener('scroll',()=>{document.getElementById('st').classList.toggle('v',window.scrollY>400);});
function observe(){
  const io=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('in');});},{threshold:0.05,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fu').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight&&r.bottom>0){el.classList.add('in');}
    else{io.observe(el);}
  });
  // Fallback — after 600ms force-show anything still hidden
  setTimeout(()=>{document.querySelectorAll('.fu:not(.in)').forEach(el=>el.classList.add('in'));},600);
}
let mOpen=false;
function mobMenu(){
  mOpen=!mOpen;
  const nl=document.querySelector('.nav-links');
  const hmb=document.getElementById('hmb');
  if(mOpen){
    nl.style.cssText='display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(255,255,255,0.98);backdrop-filter:blur(20px);padding:24px 5%;gap:18px;border-bottom:1px solid rgba(0,0,0,0.08);box-shadow:0 8px 32px rgba(0,0,0,0.1);z-index:199;';
    hmb.children[0].style.cssText='transform:rotate(45deg) translate(5px,5px)';
    hmb.children[1].style.cssText='opacity:0';
    hmb.children[2].style.cssText='transform:rotate(-45deg) translate(5px,-5px)';
  } else {
    nl.style.cssText='';
    hmb.children[0].style.cssText='';
    hmb.children[1].style.cssText='';
    hmb.children[2].style.cssText='';
  }
}
window.addEventListener('load',function(){
  renderSkills();
  renderProjects();
  setTimeout(observe,100);
  var yr=document.getElementById('yr');
  if(yr) yr.textContent=new Date().getFullYear();
});
