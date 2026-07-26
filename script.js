// Typewriter effect
(function(){
  const el=document.getElementById('typewriter-text');
  const cursor=document.querySelector('.typewriter-cursor');
  const phrases=['Data Scientist','Data Analyst','Machine Learning Enthusiast','Python & SQL'];
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
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',name:'Programming',level:'Primary',accent:'linear-gradient(90deg,#e76f2a,#f7a34b)',iconbg:'#fff3eb',desc:'Python and SQL are my main tools for working with data, backed by Java and JavaScript from my computer science coursework.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',name:'Data Analysis & Visualization',level:'Primary',accent:'linear-gradient(90deg,#f7931e,#ffb347)',iconbg:'#fff6e9',desc:'Cleaning and exploring data with Pandas, NumPy, and Excel, then turning it into clear visuals with Power BI, Tableau, Matplotlib, and Seaborn.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',name:'Machine Learning',level:'Primary',accent:'linear-gradient(90deg,#336791,#5b9bd5)',iconbg:'#edf4fb',desc:'Building regression, classification, and clustering models with Scikit-learn — including feature engineering, model evaluation, and predictive analytics.'},
  {faicon:'fas fa-wand-magic-sparkles',facolor:'#00758f',name:'Generative AI & Tools',level:'Proficient',accent:'linear-gradient(90deg,#00758f,#33a3bd)',iconbg:'#e9f6f9',desc:'Comfortable with prompt engineering and Claude Code agents, plus the everyday toolkit — Git, GitHub, Google Colab, Linux, MySQL, and PostgreSQL.'},
  {devicon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',name:'Web & App Development',level:'Proficient',accent:'linear-gradient(90deg,#3c873a,#68a063)',iconbg:'#edfaed',desc:'Building responsive interfaces and apps with HTML5, CSS3, React, React Native, and TypeScript.'},
  {faicon:'fas fa-diagram-project',facolor:'#4d77cf',name:'Core Concepts',level:'Proficient',accent:'linear-gradient(90deg,#4d77cf,#7aa0e0)',iconbg:'#eef3fc',desc:'A solid base in Data Structures & Algorithms, Statistics, and Object-Oriented Programming.'}
];
const projects=[
  {
    gradient:'linear-gradient(135deg,#0d1b2a 0%,#1b4332 50%,#0a3622 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><polyline points="14,54 30,40 42,48 64,22" stroke="rgba(52,211,153,0.85)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="30" cy="40" r="3" fill="rgba(255,195,0,0.95)"/><circle cx="42" cy="48" r="3" fill="rgba(255,195,0,0.95)"/><circle cx="64" cy="22" r="3.5" fill="rgba(255,107,28,0.95)"/><line x1="14" y1="14" x2="14" y2="62" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/><line x1="14" y1="62" x2="66" y2="62" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/></svg>`,
    type:'Machine Learning',tags:['Python','Pandas','Scikit-learn','Time Series'],
    title:'Stock Market Price Prediction',
    desc:'Predicts the next day\u2019s closing stock price from five years of Yahoo Finance data. I engineered ten time-series features (moving averages, volatility, returns) and compared three regression models — the best explained 98% of price variance. Served through six REST API endpoints with a dashboard for price, moving averages, and volume.',
    code:'https://github.com/anshyaduvanshi41/StockMarketPricePredication.git',live:''
  },
  {
    gradient:'linear-gradient(135deg,#2d1b69 0%,#11998e 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><line x1="14" y1="14" x2="14" y2="62" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/><line x1="14" y1="62" x2="66" y2="62" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/><rect x="20" y="40" width="8" height="22" rx="2" fill="rgba(255,107,28,0.55)"/><rect x="32" y="30" width="8" height="32" rx="2" fill="rgba(255,195,0,0.6)"/><rect x="44" y="44" width="8" height="18" rx="2" fill="rgba(255,255,255,0.35)"/><rect x="56" y="24" width="8" height="38" rx="2" fill="rgba(52,211,153,0.6)"/></svg>`,
    type:'Data Analysis',tags:['Python','Pandas','Matplotlib','Seaborn'],
    title:'Suicide Rate Analysis & Visualization',
    desc:'An analysis of 27,000+ suicide records across 100+ countries and 30 years (1985\u20132016). After cleaning the data with Pandas, I built 10+ visualizations comparing rates by age, gender, country, and year, and surfaced the top high-risk groups in an interactive dashboard.',
    code:'https://github.com/anshyaduvanshi41',live:''
  },
  {
    gradient:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><rect x="24" y="10" width="32" height="38" rx="6" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/><rect x="28" y="30" width="24" height="24" rx="5" fill="rgba(255,107,28,0.25)" stroke="rgba(255,107,28,0.7)" stroke-width="1.5"/><circle cx="40" cy="42" r="4" fill="rgba(255,195,0,0.9)"/><line x1="40" y1="46" x2="40" y2="50" stroke="rgba(255,195,0,0.9)" stroke-width="2" stroke-linecap="round"/></svg>`,
    type:'Development',tags:['React Native','TypeScript','React Hooks'],
    title:'Passwordless OTP Authentication App',
    desc:'A passwordless login app built with React Native and TypeScript. It uses a six-digit OTP with a 60-second expiry and a three-attempt limit, manages countdown and session state with React Hooks, and keeps users logged in across restarts.',
    code:'https://github.com/anshyaduvanshi41/OTPAuthSystem.git',live:''
  },
  {
    gradient:'linear-gradient(135deg,#0f2027 0%,#203a43 50%,#2c5364 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><circle cx="40" cy="40" r="18" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/><circle cx="40" cy="40" r="10" stroke="rgba(52,211,153,0.6)" stroke-width="1.5"/><circle cx="40" cy="40" r="3" fill="rgba(52,211,153,0.9)"/><line x1="40" y1="10" x2="40" y2="22" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="40" y1="58" x2="40" y2="70" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="10" y1="40" x2="22" y2="40" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/><line x1="58" y1="40" x2="70" y2="40" stroke="rgba(52,211,153,0.4)" stroke-width="1.5"/></svg>`,
    type:'Development',tags:['Python','FastAPI','REST API','Cloud'],
    title:'API Traffic Spike Simulator',
    desc:'A tool that sends hundreds of requests to an API at once to see how it handles heavy traffic. Built with Python & FastAPI to help catch performance issues before they become real problems in production.',
    code:'https://github.com/anshyaduvanshi41/CloudFunctionExpolitDetection.git',live:''
  },
  {
    gradient:'linear-gradient(135deg,#7b4397 0%,#dc2430 100%)',
    svgicon:`<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:64px;height:64px;opacity:0.9"><rect x="14" y="20" width="22" height="22" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><rect x="44" y="20" width="22" height="22" rx="4" fill="rgba(255,107,28,0.2)" stroke="rgba(255,107,28,0.6)" stroke-width="1.5"/><rect x="14" y="50" width="22" height="14" rx="4" fill="rgba(255,195,0,0.15)" stroke="rgba(255,195,0,0.5)" stroke-width="1.5"/><rect x="44" y="50" width="22" height="14" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><circle cx="25" cy="31" r="5" fill="rgba(255,255,255,0.3)"/><circle cx="55" cy="31" r="5" fill="rgba(255,107,28,0.7)"/></svg>`,
    type:'Development',tags:['React.js','JavaScript','HTML5','CSS3'],
    title:'ART-INT: AI Based Art Gallery',
    desc:'An online gallery where artists can upload and showcase their digital artwork. Built with React.js — visitors can browse by category, filter by style, and explore pieces in a clean, smooth interface.',
    code:'https://github.com/anshyaduvanshi41/ART-INT-an-AI-based-Art-Gallery.git',live:''
  }
];
const projectDetails={
  'Stock Market Price Prediction':{
    challenge:'Predict the next day\u2019s closing stock price from years of noisy historical market data.',
    approach:['Pulled 5 years of historical price data from Yahoo Finance.','Engineered 10 time-series features — moving averages, volatility, returns, and price spreads.','Used an 80/20 chronological train-test split to respect time order.','Trained and compared Linear Regression, Decision Tree, and Random Forest.','Served the best model through 6 REST API endpoints with an interactive dashboard.'],
    result:'The best model explained 98% of price variance, with a dashboard visualizing price, moving averages, and volume trends.'
  },
  'Suicide Rate Analysis & Visualization':{
    challenge:'Understand global suicide-rate trends across three decades and find the demographics most at risk.',
    approach:['Analyzed 27,000+ records spanning 100+ countries and 30 years (1985\u20132016).','Cleaned and preprocessed 6+ features with Pandas, handling missing values and inconsistencies.','Produced 10+ visualizations comparing rates by age, gender, country, and year.','Built an interactive dashboard to explore the trends.'],
    result:'Identified the top 10 high-risk countries and age groups; the dashboard cut manual analysis effort by 80%+.'
  },
  'Passwordless OTP Authentication App':{
    challenge:'Let users log in securely on mobile without passwords.',
    approach:['Built the app with React Native and TypeScript.','Implemented a 6-digit OTP with a 60-second expiry and a 3-attempt limit.','Managed 3 stateful flows with React Hooks — OTP countdown, session tracking, and app state.','Persisted login across restarts using local storage, with interval cleanup to prevent memory leaks.'],
    result:'A working passwordless authentication flow with clean session and state handling.'
  },
  'API Traffic Spike Simulator':{
    challenge:'Test how an API holds up under sudden bursts of heavy traffic.',
    approach:['Built a load-testing tool in Python with FastAPI.','Sent hundreds of concurrent requests to simulate traffic spikes.','Measured response behavior to surface performance bottlenecks.'],
    result:'A tool to catch performance problems before they reach production.'
  },
  'ART-INT: AI Based Art Gallery':{
    challenge:'Give artists a clean space to upload and showcase digital artwork.',
    approach:['Built the gallery with React.js.','Added browse-by-category and filter-by-style.','Focused on a smooth, responsive interface.'],
    result:'An online gallery where visitors can explore artwork by category and style.'
  }
};
function renderSkills(){document.getElementById('skills-grid').innerHTML=services.map(s=>`<div class="skill-card fu" style="--card-accent:${s.accent};"><div class="skill-icon-wrap" style="background:${s.iconbg};">${s.faicon?`<i class="${s.faicon}" style="font-size:26px;color:${s.facolor||'#e76f2a'};"></i>`:`<img src="${s.devicon}" alt="${s.name}" style="width:30px;height:30px;object-fit:contain;"/>`}</div><div class="skill-body"><div class="skill-top"><div class="skill-name">${s.name}</div><span class="skill-level ${s.level.toLowerCase()}">${s.level}</span></div><div class="skill-desc">${s.desc}</div></div></div>`).join('');observe();}
function renderProjects(filter='all'){
  const f=filter==='all'?projects:projects.filter(p=>p.type===filter);
  document.getElementById('projects-grid').innerHTML=f.map(p=>`<div class="proj-card fu"><div class="proj-cover" style="background:${p.gradient}">${p.svgicon}<div class="proj-badge">${p.type}</div><div class="proj-cover-title">${p.title}</div></div><div class="proj-body"><div class="proj-tags">${p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('')}</div><div class="proj-title">${p.title}</div><div class="proj-desc">${p.desc}</div><div class="proj-links"><button type="button" class="proj-link details" onclick="openProject(${projects.indexOf(p)})"><i class="fas fa-book-open"></i> Case Study</button>${p.code?`<a href="${p.code}" target="_blank" rel="noopener" class="proj-link code"><i class="fab fa-github"></i> GitHub</a>`:''}</div></div></div>`).join('');
  observe();
}
function filterProj(f,btn){document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProjects(f);}
function openProject(i){
  const p=projects[i]; if(!p) return;
  const d=projectDetails[p.title]||null;
  const cover=document.getElementById('pmCover');
  cover.style.background=p.gradient; cover.innerHTML=p.svgicon;
  document.getElementById('pmBadge').textContent=p.type;
  document.getElementById('pmTitle').textContent=p.title;
  document.getElementById('pmTags').innerHTML=p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('');
  document.getElementById('pmBody').innerHTML=`<p class="pm-desc">${p.desc}</p>`+(d?`<div class="pm-section"><h4>The Challenge</h4><p>${d.challenge}</p></div><div class="pm-section"><h4>My Approach</h4><ul>${d.approach.map(a=>`<li>${a}</li>`).join('')}</ul></div><div class="pm-section"><h4>Result</h4><p>${d.result}</p></div>`:'');
  document.getElementById('pmLinks').innerHTML=(p.code?`<a href="${p.code}" target="_blank" rel="noopener" class="proj-link code"><i class="fab fa-github"></i> View Code</a>`:'')+(p.live?`<a href="${p.live}" target="_blank" rel="noopener" class="proj-link live"><i class="fas fa-external-link-alt"></i> Live Demo</a>`:'');
  const m=document.getElementById('pmodal');
  m.classList.add('open'); m.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeProject(){
  const m=document.getElementById('pmodal');
  if(!m) return;
  m.classList.remove('open'); m.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeProject();});

// Count-up animation for hero stats
function animateStat(el){
  var txt=(el.getAttribute('data-final')||el.textContent).trim();
  var m=txt.match(/^([\d.]+)(.*)$/);
  if(!m){return;}
  el.setAttribute('data-final',txt);
  var target=parseFloat(m[1]); var suffix=m[2]; var dec=(m[1].split('.')[1]||'').length;
  var dur=1300, t0=performance.now();
  function step(now){
    var t=Math.min((now-t0)/dur,1);
    var eased=1-Math.pow(1-t,3);
    el.textContent=(target*eased).toFixed(dec)+suffix;
    if(t<1){requestAnimationFrame(step);} else {el.textContent=m[1]+suffix;}
  }
  requestAnimationFrame(step);
}
function runCountUp(){document.querySelectorAll('.hero-stats .stat-num').forEach(animateStat);}
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
  hmb.setAttribute('aria-expanded',mOpen?'true':'false');
  hmb.setAttribute('aria-label',mOpen?'Close menu':'Open menu');
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
  var hmb=document.getElementById('hmb');
  if(hmb) hmb.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();mobMenu();}});
  setTimeout(runCountUp,250);
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){});}
});
