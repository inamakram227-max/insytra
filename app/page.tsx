"use client";

import { useEffect } from "react";

export default function Home() {
  const sendWA = () => {
    const v = (id: string) => (document.getElementById(id) as HTMLInputElement)?.value || "—";
    window.open(`https://wa.me/923294438243?text=Hi Insytra! %0A%0AName: ${v("f-name")}%0ABusiness: ${v("f-biz")}%0AI want to automate: ${v("f-msg")}`, "_blank");
  };

  useEffect(() => {

  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // stagger reveal
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach(g=>{g.querySelectorAll<HTMLElement>('.reveal').forEach((el,i)=>el.style.transitionDelay=(i*80)+'ms')});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll<HTMLElement>('.reveal').forEach(el=>io.observe(el));
  // nav + progress + scrollspy
  const nav=document.getElementById('nav')!,prog=document.getElementById('prog')!;
  addEventListener('scroll',()=>{nav.classList.toggle('stuck',scrollY>36);const h=document.documentElement;prog.style.width=(scrollY/(h.scrollHeight-h.clientHeight)*100)+'%';let cur='';document.querySelectorAll<HTMLElement>('section[id]').forEach(s=>{if(scrollY>=s.offsetTop-130)cur=s.id});document.querySelectorAll<HTMLElement>('.nlinks a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur))});
  // mobile menu
  const burger=document.getElementById('burger')!,mob=document.getElementById('mobile')!;
  burger.onclick=()=>mob.classList.toggle('open');mob.querySelectorAll('a').forEach(a=>a.onclick=()=>mob.classList.remove('open'));
  // counters
  const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target as HTMLElement,t=+(el.dataset.count||0);let n=0,st=Math.max(1,Math.ceil(t/40));const tick=()=>{n=Math.min(t,n+st);el.textContent=String(n);if(n<t)requestAnimationFrame(tick)};tick();cio.unobserve(el)}}),{threshold:.5});
  document.querySelectorAll<HTMLElement>('[data-count]').forEach(el=>cio.observe(el));

  // hero live status ticker
  (function(){const s=['Lead captured','AI replying…','CRM updated','Email sent','Slack notified','Done ✓'];let i=0;const el=document.getElementById('wfStatus');if(el){el.style.transition='opacity .2s';setInterval(()=>{i=(i+1)%s.length;el.style.opacity='0';setTimeout(()=>{el.textContent=s[i];el.style.opacity='1';},200);},1800);}})();
  // auto-playing demo chat
  (function(){const chat=document.getElementById('demoChat') as HTMLElement;if(!chat)return;const msgs=[{t:'in',x:'Salam, abhi open ho? 🍔'},{t:'out',x:'Walaikum salam! Ji, 11pm tak open hain. Kya order karna chahenge?'},{t:'in',x:'2 zinger burger + 1 pizza'},{t:'out',x:'Perfect ✅ Order #318 — Rs. 1,250. Address bhej dein.'},{t:'sys',x:'✓ order #318 saved to Google Sheet'}];function run(){chat.innerHTML='';let d=400;msgs.forEach(m=>{setTimeout(()=>{const e=document.createElement('div');if(m.t==='sys'){e.className='sysnote';e.textContent=m.x;}else{e.className='bub '+m.t;e.innerHTML=m.x+(m.t==='out'?' <span class="tick">✓✓</span>':'');}e.style.opacity='0';e.style.transition='opacity .3s';chat.appendChild(e);requestAnimationFrame(()=>e.style.opacity='1');chat.scrollTop=chat.scrollHeight;},d);d+=1100;});setTimeout(run,d+2600);}run();})();

  if(!reduce){
    // cursor glow
    const glow=document.createElement('div');glow.className='cursor-glow';document.body.appendChild(glow);
    addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
    // magnetic buttons
    document.querySelectorAll<HTMLElement>('.magnetic').forEach(b=>{
      b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});
      b.addEventListener('mouseleave',()=>b.style.transform='');
    });
    // card tilt
    document.querySelectorAll<HTMLElement>('.tilt').forEach(c=>{
      c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${px*7}deg) rotateX(${-py*7}deg) translateY(-4px)`});
      c.addEventListener('mouseleave',()=>c.style.transform='');
    });
    // hero parallax
    const wf=document.getElementById('wfCanvas');
    addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);if(wf)wf.style.transform=`translate(${x*16}px,${y*16}px)`});
  }
  }, []);

  return (
    <>

<div id="prog"></div>

<nav id="nav">
  <div className="logo"><span className="mk">I</span>Insytra</div>
  <div className="nlinks"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#why">Why us</a><a href="#demo">Demos</a></div>
  <div className="nav-right">
    <a href="#contact" className="btn btn-p">Book a call</a>
    <button className="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div className="mobile" id="mobile"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#why">Why us</a><a href="#demo">Demos</a><a href="#contact">Contact</a></div>

<header>
  <div className="wrap">
    <div className="hero">
      <div className="hero-txt" data-stagger>
        <span className="eyebrow reveal"><span className="d"></span>AI Automation Studio</span>
        <h1 className="reveal">Give your team <span className="g">30+ hours back</span> — every week.</h1>
        <p className="sub reveal">Insytra builds custom AI agents — WhatsApp bots, lead pipelines, and booking systems — that take the repetitive work off your plate, 24/7.</p>
        <div className="hero-btns reveal">
          <a href="#contact" className="btn btn-p btn-lg magnetic">Book a free AI strategy call →</a>
          <a href="#demo" className="btn btn-g btn-lg magnetic">See live demos</a>
        </div>
        <div className="mono-lines reveal"><div>Replies in 3 seconds</div><div>Works while you sleep</div><div>Never forgets a lead</div></div>
      </div>
      <div className="wf-wrap reveal">
        <div className="wf-glow"></div>
        <div className="wf-canvas" id="wfCanvas">
          <div className="wf-head"><i></i><i></i><i></i><span className="t">insytra · live workflow</span></div>
          <div className="wf-body">
            <div className="wf-node" style={{animationDelay: '0s'}}><div className="wf-ic">▸</div><div><div className="wf-nm">New Lead</div><div className="wf-sub">WhatsApp · Web form</div></div></div>
            <div className="wf-wire" style={{animationDelay: '.2s'}}></div>
            <div className="wf-node" style={{animationDelay: '.3s'}}><div className="wf-ic">✳</div><div><div className="wf-nm">AI Agent</div><div className="wf-sub">Understands &amp; replies</div></div></div>
            <div className="wf-wire" style={{animationDelay: '.5s'}}></div>
            <div className="wf-node" style={{animationDelay: '.6s'}}><div className="wf-ic">▤</div><div><div className="wf-nm">Update CRM</div><div className="wf-sub">Log &amp; tag the lead</div></div></div>
            <div className="wf-wire" style={{animationDelay: '.8s'}}></div>
            <div className="wf-row">
              <div className="wf-node sm" style={{animationDelay: '.9s'}}><div className="wf-ic">✉</div><div className="wf-nm">Email</div></div>
              <div className="wf-node sm" style={{animationDelay: '1s'}}><div className="wf-ic">◆</div><div className="wf-nm">Slack</div></div>
            </div>
          </div>
          <div className="wf-status"><span className="wf-pulse"></span><span id="wfStatus">Lead captured</span></div>
        </div>
      </div>
    </div>
    <div className="strip reveal">
      <div className="cap">Built on a modern automation stack</div>
      <div className="row"><span>n8n</span><span>WhatsApp API</span><span>Groq</span><span>Supabase</span><span>Airtable</span><span>Google Sheets</span></div>
    </div>
  </div>
</header>

<section style={{paddingTop: '44px'}}>
  <div className="wrap">
    <div className="stats" data-stagger>
      <div className="stat reveal"><div className="n">30<span style={{fontSize: '1.4rem'}}>+</span></div><div className="l">Hours saved / week</div></div>
      <div className="stat reveal"><div className="n"><span data-count="3">3</span>s</div><div className="l">Avg. reply time</div></div>
      <div className="stat reveal"><div className="n">24/7</div><div className="l">Always working</div></div>
      <div className="stat reveal"><div className="n"><span data-count="90">90</span>%</div><div className="l">Of FAQs automated</div></div>
    </div>
  </div>
</section>

<section className="alt">
  <div className="wrap">
    <div className="show">
      <div className="show-txt reveal">
        <div className="slabel"><span className="num">◦</span> See it in action</div>
        <h2>Every customer answered — in seconds.</h2>
        <p>A WhatsApp agent that talks to customers, takes orders, and logs everything — so you never lose a late-night sale again.</p>
        <ul className="checklist">
          <li><span className="ck">✓</span> Replies instantly, day or night</li>
          <li><span className="ck">✓</span> Speaks Roman Urdu &amp; English</li>
          <li><span className="ck">✓</span> Logs every order automatically</li>
        </ul>
      </div>
      <div className="reveal">
        <div className="phone"><div className="pscreen">
          <div className="phead"><div className="pav">R</div><div><div className="pname">Rider Go</div><div className="ponline">online · replies instantly</div></div></div>
          <div className="pbody">
            <div className="bub in">Hi! Do you deliver to Gujrat? 🛵</div>
            <div className="bub out">Yes! We deliver across Gujrat &amp; Jalalpur Jattan. What would you like? <span className="tick">✓✓</span></div>
            <div className="bub in">1 Zinger burger + fries 🍔🍟</div>
            <div className="bub out">Got it ✅ Order <b>#241</b> — Rs. 650. Confirm? <span className="tick">✓✓</span></div>
            <div className="bub in">Yes confirm</div>
            <div className="sysnote">✓ order #241 logged to Google Sheet</div>
          </div>
          <div className="pinput">Type a message…</div>
        </div></div>
      </div>
    </div>
  </div>
</section>

<section id="services">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">01</span> What we build</div><h2>Put your busywork on autopilot.</h2><p className="ssub">Custom AI systems that capture, convert, and keep customers — measured in hours saved.</p></div>
    <div className="bento" data-stagger>
      <div className="bcell b-feature b-wide reveal tilt">
        <div><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <h3>AI Customer Support</h3><div className="benefit">Replies in under 3 seconds.</div><p>A WhatsApp &amp; web assistant that answers customers, takes orders, and never leaves a message unread.</p></div>
        <ul className="metrics"><li>Replies within 3 seconds</li><li>Available 24/7, no days off</li><li>90% of repetitive questions automated</li></ul>
      </div>
      <div className="bcell b-tall reveal tilt">
        <div className="cico"><svg className="sic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
        <h3>Lead &amp; Booking Automation</h3><div className="benefit">Never miss a qualified lead.</div><p>Capture every enquiry, qualify it with AI, and let customers book 24/7 — with confirmations and reminders handled automatically.</p>
        <ul className="metrics"><li>Every lead captured</li><li>Auto-qualified &amp; routed</li><li>Zero missed bookings</li></ul>
      </div>
      <div className="bcell reveal tilt">
        <div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg></div>
        <h3>CRM &amp; Data Sync</h3><div className="benefit">No more manual data entry.</div><p>Every lead and order flows into your tools automatically.</p>
        <ul className="metrics"><li>No manual entry</li><li>Always up to date</li></ul>
      </div>
      <div className="bcell reveal tilt">
        <div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 3h4v4"/></svg></div>
        <h3>Growth Engine</h3><div className="benefit">A pipeline that fills itself.</div><p>Automated outreach that fills your pipeline with qualified prospects.</p>
        <ul className="metrics"><li>Outreach on autopilot</li><li>Qualified leads only</li></ul>
      </div>
      <div className="bcell b-wide reveal tilt">
        <div className="cico"><svg className="sic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg></div>
        <h3>Web &amp; Internal Systems</h3><div className="benefit">A site that sells while you sleep.</div><p>Fast, modern websites and custom internal tools — built to convert visitors and to run your daily operations behind the scenes.</p>
        <ul className="metrics"><li>Built to convert</li><li>Runs your daily ops</li></ul>
      </div>
    </div>
  </div>
</section>

<section id="work" className="alt">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">02</span> Case studies</div><h2>Systems that paid for themselves.</h2></div>
    <div className="feat-work reveal">
      <div className="fw-txt">
        <span className="tag">Data Entry Portal</span>
        <h3>Xyner Cafe</h3>
        <div className="cs-row"><div className="lb">Problem</div><div className="vl">Two branches tracked sales &amp; expenses in notebooks — numbers never matched and the owner had no daily view.</div></div>
        <div className="cs-row"><div className="lb">Solution</div><div className="vl">A custom data-entry web app with branch-level logging and one live dashboard the team fills in seconds.</div></div>
        <div className="cs-row res"><div className="lb">Result</div><div className="vl">One source of truth across both branches — daily totals in seconds, not hours of reconciliation.</div></div>
        <div className="chips"><span className="chip">React</span><span className="chip">Supabase</span><span className="chip">PWA</span></div>
        <a href="#contact" className="btn btn-g magnetic">Want a system like this? →</a>
      </div>
      <div className="fw-visual">
        <div className="dash">
          <div className="dash-h"><b>Xyner — Daily Sheet</b><span>Today</span></div>
          <div className="drow hd"><span>Branch</span><span>Sales</span><span>Expense</span></div>
          <div className="drow"><span>Jalalpur Jattan</span><span>Rs 48,200</span><span>Rs 9,400</span></div>
          <div className="drow"><span>Gujrat</span><span>Rs 61,750</span><span>Rs 12,100</span></div>
          <div className="drow"><span>Total</span><span>Rs 109,950</span><span>Rs 21,500</span></div>
        </div>
      </div>
    </div>
    <div className="grid3" data-stagger>
      <div className="card reveal tilt"><span className="tag">WhatsApp Bot</span><h3>Rider Go</h3>
        <div className="cs-row"><div className="lb">Problem</div><div className="vl">Orders missed after hours and during rushes.</div></div>
        <div className="cs-row res"><div className="lb">Result</div><div className="vl">Reply time cut from ~15 min to 3 sec — orders logged 24/7.</div></div>
        <div className="chips"><span className="chip">n8n</span><span className="chip">Groq</span><span className="chip">Sheets</span></div>
      </div>
      <div className="card reveal tilt"><span className="tag">Booking Agent</span><h3>Smile Dental</h3>
        <div className="cs-row"><div className="lb">Problem</div><div className="vl">Front desk missed booking requests.</div></div>
        <div className="cs-row res"><div className="lb">Result</div><div className="vl">Round-the-clock scheduling, zero missed.</div></div>
        <div className="chips"><span className="chip">AI Agent</span><span className="chip">Calendar</span></div>
      </div>
      <div className="card reveal tilt"><span className="tag">Lead Pipeline</span><h3>Lead Capture</h3>
        <div className="cs-row"><div className="lb">Problem</div><div className="vl">Leads went cold before follow-up.</div></div>
        <div className="cs-row res"><div className="lb">Result</div><div className="vl">Follow-up time: hours → seconds, on autopilot.</div></div>
        <div className="chips"><span className="chip">n8n</span><span className="chip">Gmail</span></div>
      </div>
    </div>
  </div>
</section>

<section id="process">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">03</span> How we work</div><h2>From &quot;too busy&quot; to &quot;handled&quot; in four steps.</h2></div>
    <div className="steps" data-stagger>
      <div className="step reveal"><div className="sn">STEP 01</div><h3>Discover</h3><p>We map the repetitive work eating your team's hours.</p></div>
      <div className="step reveal"><div className="sn">STEP 02</div><h3>Build</h3><p>We design and wire the automation to your tools.</p></div>
      <div className="step reveal"><div className="sn">STEP 03</div><h3>Launch</h3><p>The system goes live and starts handling the work.</p></div>
      <div className="step reveal"><div className="sn">STEP 04</div><h3>Support</h3><p>We monitor, tune, and keep everything running.</p></div>
    </div>
  </div>
</section>

<section id="why" className="alt">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">04</span> Why Insytra</div><h2>Built to pay for itself.</h2><p className="ssub">Not just automations — systems designed around your bottom line.</p></div>
    <div className="about-vals" data-stagger>
      <div className="aval reveal tilt"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg></div><h3>Live in 14 days</h3><p>Most systems go live within two weeks — you start saving time almost immediately.</p></div>
      <div className="aval reveal tilt"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>You own everything</h3><p>Your tools, your data, your brand. No lock-in, no rented software — the system is yours.</p></div>
      <div className="aval reveal tilt"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h3>Speaks your language</h3><p>Roman Urdu, English, or a mix — your bot talks the way your customers actually do.</p></div>
    </div>
  </div>
</section>

<section>
  <div className="wrap">
    <div className="cta-banner reveal">
      <div><h2>Ready to automate your business?</h2><p>Book a free strategy call — we'll map exactly what you can automate.</p></div>
      <a href="#contact" className="btn btn-p btn-lg magnetic">Book a free strategy call →</a>
    </div>
  </div>
</section>

<section id="about">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">05</span> Who we are</div><h2>An automation studio built for results.</h2><p className="ssub">We help businesses replace repetitive work with systems that run on their own.</p></div>
    <div className="about-vals" data-stagger>
      <div className="aval reveal"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg></div><h3>Systems, not band-aids</h3><p>We don't sell one-off scripts. We build complete systems that keep working long after launch.</p></div>
      <div className="aval reveal"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div><h3>Direct &amp; hands-on</h3><p>You work directly with the people building your system — no middlemen, no runaround.</p></div>
      <div className="aval reveal"><div className="cico"><svg className="sic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg></div><h3>Local &amp; global</h3><p>From cafés and clinics in Pakistan to businesses in the UK &amp; US — we build for both.</p></div>
    </div>
  </div>
</section>

<section id="demo" className="alt">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">06</span> Watch a demo</div><h2>See a system take a real order.</h2><p className="ssub">60 seconds — a WhatsApp bot handling an order from hello to logged.</p></div>
    <div className="demo-player reveal"><div className="pscreen">
      <div className="phead"><div className="pav">R</div><div><div className="pname">Rider Go — Live Demo</div><div className="ponline">▶ playing…</div></div></div>
      <div className="pbody" id="demoChat" style={{minHeight: '300px'}}></div>
    </div></div>
    <div className="demo-tag">// auto-playing demo — a real order, start to finish</div>
  </div>
</section>

<section id="testimonials">
  <div className="wrap">
    <div className="shead ctr reveal"><div className="slabel"><span className="num">07</span> Testimonials</div><h2>Don't take our word for it.</h2><p className="ssub">Real words from the businesses we work with.</p></div>
    <div className="tgrid" data-stagger>
      <div className="tcard reveal"><div className="tstars">★★★★★</div><p>&ldquo;The WhatsApp bot takes orders even when we're closed. We stopped losing late-night customers almost overnight.&rdquo;</p><div className="twho"><div className="tav"><svg viewBox="0 0 48 48"><defs><linearGradient id="av1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3DDC97"/><stop offset="1" stopColor="#2BB77E"/></linearGradient></defs><rect width="48" height="48" fill="url(#av1)"/><circle cx="24" cy="19" r="8" fill="#08130d" opacity=".8"/><path d="M8 44c2-9 8-13 16-13s14 4 16 13z" fill="#08130d" opacity=".8"/></svg></div><div><div className="tname">Bilal Ahmed</div><div className="trole">Owner · Fast-food takeaway</div></div></div></div>
      <div className="tcard reveal"><div className="tstars">★★★★★</div><p>&ldquo;Setup was quick and completely hands-off. Appointment bookings just started coming in automatically, day and night.&rdquo;</p><div className="twho"><div className="tav"><svg viewBox="0 0 48 48"><defs><linearGradient id="av2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#34D8C0"/><stop offset="1" stopColor="#22A9B7"/></linearGradient></defs><rect width="48" height="48" fill="url(#av2)"/><circle cx="24" cy="19" r="8" fill="#07130f" opacity=".8"/><path d="M8 44c2-9 8-13 16-13s14 4 16 13z" fill="#07130f" opacity=".8"/></svg></div><div><div className="tname">Sara Malik</div><div className="trole">Manager · Dental clinic</div></div></div></div>
      <div className="tcard reveal"><div className="tstars">★★★★★</div><p>&ldquo;Our daily sales and expenses used to be a mess across two branches. Now it's all in one clean dashboard.&rdquo;</p><div className="twho"><div className="tav"><svg viewBox="0 0 48 48"><defs><linearGradient id="av3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7CE06A"/><stop offset="1" stopColor="#3DDC97"/></linearGradient></defs><rect width="48" height="48" fill="url(#av3)"/><circle cx="24" cy="19" r="8" fill="#0a1408" opacity=".8"/><path d="M8 44c2-9 8-13 16-13s14 4 16 13z" fill="#0a1408" opacity=".8"/></svg></div><div><div className="tname">Hamza Khan</div><div className="trole">Owner · Café (two branches)</div></div></div></div>
    </div>
  </div>
</section>

<section id="contact" className="alt">
  <div className="wrap">
    <div className="contact-box reveal">
      <div className="contact-l">
        <div className="slabel"><span className="num">◦</span> Let's talk</div>
        <h2>Book your free AI strategy call.</h2>
        <p>Tell us what's slowing your business down. We'll show you exactly what we can automate — free, no pressure.</p>
        <div className="resp">⚡ We reply within 24 hours</div>
        <div className="direct">
          <a href="https://calendly.com/" target="_blank">📅 &nbsp; Book a call on Calendly</a>
          <a href="https://wa.me/923294438243">💬 &nbsp; WhatsApp — +92 329 4438243</a>
          <a href="mailto:inamakram227@gmail.com">✉️ &nbsp; inamakram227@gmail.com</a>
        </div>
      </div>
      <div className="contact-r">
        <div className="field"><label>Your name</label><input id="f-name" type="text" placeholder="Ahmed Khan" /></div>
        <div className="field"><label>Business / what you do</label><input id="f-biz" type="text" placeholder="Cafe, clinic, shop…" /></div>
        <div className="field"><label>What do you want to automate?</label><textarea id="f-msg" placeholder="e.g. a WhatsApp bot to take orders…"></textarea></div>
        <button className="btn btn-p btn-lg magnetic" style={{width: '100%', justifyContent: 'center'}} onClick={sendWA}>Send via WhatsApp →</button>
      </div>
    </div>
  </div>
</section>

<footer>
  <div className="wrap">
    <div className="fgrid">
      <div className="fabout">
        <div className="logo"><span className="mk">I</span>Insytra</div>
        <p>Custom AI systems that give businesses their time back.</p>
        <div className="socials">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></a>
          <a href="https://github.com/inamakram227-max/insytra" aria-label="GitHub"><svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg></a>
          <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z"/></svg></a>
        </div>
      </div>
      <div className="fcol"><h4>Explore</h4><a href="#services">Services</a><a href="#work">Work</a><a href="#why">Why us</a><a href="#demo">Demos</a></div>
      <div className="fcol"><h4>Studio</h4><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
      <div className="fcol"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
    </div>
    <div className="fbot"><div className="cr">© 2026 Insytra · All rights reserved.</div><div className="cr">AI automation · Built in Pakistan 🇵🇰</div></div>
  </div>
</footer>

<a className="wafab" href="https://wa.me/923294438243" target="_blank" rel="noopener"><span className="ic">💬</span><span className="tx">Chat on WhatsApp</span></a>
    </>
  );
}