"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // reveal on scroll
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // nav bg + progress + scrollspy
    const nav = document.getElementById("nav");
    const prog = document.getElementById("prog");
    const onScroll = () => {
      if (nav) nav.classList.toggle("stuck", window.scrollY > 36);
      const h = document.documentElement;
      if (prog)
        prog.style.width =
          (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100 + "%";
      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 130) cur = s.id;
      });
      document
        .querySelectorAll(".nlinks a")
        .forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + cur)
        );
    };
    window.addEventListener("scroll", onScroll);

    // mobile menu
    const burger = document.getElementById("burger");
    const mob = document.getElementById("mobile");
    const toggle = () => mob?.classList.toggle("open");
    burger?.addEventListener("click", toggle);
    mob?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mob?.classList.remove("open"))
    );

    // counters
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const t = +(el.dataset.count || "0");
            let n = 0;
            const step = Math.max(1, Math.ceil(t / 40));
            const tick = () => {
              n = Math.min(t, n + step);
              el.textContent = String(n);
              if (n < t) requestAnimationFrame(tick);
            };
            tick();
            cio.unobserve(el);
          }
        }),
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      burger?.removeEventListener("click", toggle);
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  const sendWA = () => {
    const val = (id: string) =>
      (document.getElementById(id) as HTMLInputElement)?.value || "—";
    const n = val("f-name"),
      b = val("f-biz"),
      m = val("f-msg");
    window.open(
      `https://wa.me/923294438243?text=Hi Insytra! %0A%0AName: ${n}%0ABusiness: ${b}%0AI want to automate: ${m}`,
      "_blank"
    );
  };

  return (
    <>
      <div id="prog"></div>

      <nav id="nav">
        <div className="logo"><span className="mk">I</span>Insytra</div>
        <div className="nlinks">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="btn btn-p">Book a call</a>
          <button className="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </nav>
      <div className="mobile" id="mobile">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      <header>
        <div className="wrap">
          <div className="hero">
            <div className="hero-txt">
              <span className="eyebrow"><span className="d"></span>AI Automation Studio</span>
              <h1>We build the systems businesses <span className="g">run on.</span></h1>
              <p className="sub">Insytra designs and ships AI automations — WhatsApp bots, lead pipelines, and booking agents — that handle the repetitive work, around the clock.</p>
              <div className="hero-btns">
                <a href="#contact" className="btn btn-p btn-lg">Book a free call →</a>
                <a href="#work" className="btn btn-g btn-lg">View our work</a>
              </div>
              <div className="mono-lines"><div>Capture every lead</div><div>Answer every customer</div><div>Log every order</div></div>
            </div>
            <div className="core-wrap">
              <div className="core-glow"></div>
              <div className="scene"><div className="orbit"><div className="ring"></div><div className="ring r2"></div><div className="odot"></div><div className="odot b"></div><div className="odot c"></div></div></div>
              <div className="core"></div>
            </div>
          </div>
          <div className="strip">
            <div className="cap">Built on a modern automation stack</div>
            <div className="row"><span>n8n</span><span>WhatsApp API</span><span>Groq</span><span>Supabase</span><span>Airtable</span><span>Google Sheets</span></div>
          </div>
        </div>
      </header>

      <section className="pt44">
        <div className="wrap">
          <div className="stats">
            <div className="stat reveal"><div className="n">24/7</div><div className="l">Always-on systems</div></div>
            <div className="stat reveal"><div className="n"><span data-count="60">60</span>s</div><div className="l">Avg. reply time</div></div>
            <div className="stat reveal"><div className="n"><span data-count="100">100</span>%</div><div className="l">Orders auto-logged</div></div>
            <div className="stat reveal"><div className="n"><span data-count="6">6</span>+</div><div className="l">Tools integrated</div></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="show">
            <div className="show-txt reveal">
              <div className="slabel"><span className="num">◦</span> See it in action</div>
              <h2>Your customers get answers instantly.</h2>
              <p>A WhatsApp agent that talks to customers, takes orders, and logs everything — without anyone lifting a finger.</p>
              <ul className="checklist">
                <li><span className="ck">✓</span> Replies in seconds, day or night</li>
                <li><span className="ck">✓</span> Speaks Roman Urdu &amp; English</li>
                <li><span className="ck">✓</span> Logs every order to your sheet</li>
              </ul>
            </div>
            <div className="reveal">
              <div className="phone"><div className="pscreen">
                <div className="phead"><div className="pav">R</div><div><div className="pname">Rider Go</div><div className="ponline">online · replies instantly</div></div></div>
                <div className="pbody">
                  <div className="bub in">Hi! Do you deliver to Gujrat? 🛵</div>
                  <div className="bub out">Yes! We deliver across Gujrat &amp; Jalalpur Jattan. What would you like to order? <span className="tick">✓✓</span></div>
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
          <div className="shead ctr reveal"><div className="slabel"><span className="num">01</span> What we build</div><h2>Everything your business needs to run itself.</h2><p className="ssub">Capture, convert, and keep customers — automated end to end.</p></div>
          <div className="bento">
            <div className="bcell b-feature b-wide reveal">
              <div><div className="cico">⚡</div><h3>AI Automation</h3><p>WhatsApp bots and n8n workflows that qualify leads, answer FAQs, and log every order — around the clock.</p></div>
              <div className="mini-chat"><div className="mb i">Kitne ka hai?</div><div className="mb o">Zinger deal Rs. 650 — order karun? ✅</div></div>
            </div>
            <div className="bcell b-tall reveal">
              <div className="cico">◫</div><h3>Web &amp; Systems</h3><p>Fast, modern websites and internal tools — built to convert visitors and to run your daily operations behind the scenes.</p>
              <p className="mono tech-note">React · Next.js · Supabase</p>
            </div>
            <div className="bcell reveal"><div className="cico">◎</div><h3>Growth Engine</h3><p>Automated outreach that fills your calendar with qualified prospects.</p></div>
            <div className="bcell reveal"><div className="cico">↻</div><h3>CRM &amp; Sheets Sync</h3><p>Every lead and order flows into your tools, automatically.</p></div>
            <div className="bcell b-wide reveal"><div className="cico">◷</div><h3>Booking &amp; Scheduling Agents</h3><p>Let customers book 24/7 while the system handles confirmations and reminders — no front desk required.</p></div>
          </div>
        </div>
      </section>

      <section id="work" className="alt">
        <div className="wrap">
          <div className="shead ctr reveal"><div className="slabel"><span className="num">02</span> Selected work</div><h2>Real systems, real businesses.</h2></div>
          <div className="feat-work reveal">
            <div className="fw-txt">
              <span className="tag">Data Entry Portal</span>
              <h3>Xyner Cafe</h3>
              <p>A custom data-entry system that tracks daily sales and expenses across two café branches — replacing scattered notebooks with one clean dashboard the team fills in seconds.</p>
              <div className="outcome">◇ &nbsp;Two branches, one source of truth</div>
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
          <div className="grid3">
            <div className="card reveal"><span className="tag">WhatsApp Bot</span><h3>Rider Go</h3><p>AI food-ordering on WhatsApp with automated logging and per-customer memory.</p><div className="outcome">◇ Orders handled 24/7</div></div>
            <div className="card reveal"><span className="tag">Booking Agent</span><h3>Smile Dental</h3><p>An assistant that handles patient scheduling around the clock — no missed bookings.</p><div className="outcome">◇ Zero missed appointments</div></div>
            <div className="card reveal"><span className="tag">Lead Pipeline</span><h3>Lead Capture</h3><p>Captures leads, qualifies them with AI, and sends personalized follow-ups automatically.</p><div className="outcome">◇ Follow-ups on autopilot</div></div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="shead ctr reveal"><div className="slabel"><span className="num">03</span> How we work</div><h2>From &quot;too busy&quot; to &quot;handled&quot; in four steps.</h2></div>
          <div className="steps">
            <div className="step reveal"><div className="sn">STEP 01</div><h3>Discover</h3><p>We map the repetitive work eating your team&apos;s hours.</p></div>
            <div className="step reveal"><div className="sn">STEP 02</div><h3>Build</h3><p>We design and wire the automation to your tools.</p></div>
            <div className="step reveal"><div className="sn">STEP 03</div><h3>Launch</h3><p>The system goes live and starts handling the work.</p></div>
            <div className="step reveal"><div className="sn">STEP 04</div><h3>Support</h3><p>We monitor, tune, and keep everything running smoothly.</p></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="alt">
        <div className="wrap">
          <div className="shead ctr reveal"><div className="slabel"><span className="num">04</span> Pricing</div><h2>Simple, transparent packages.</h2><p className="ssub">Start small or go all-in. Every project is tailored to your business.</p></div>
          <div className="pricing-grid">
            <div className="price reveal">
              <div className="pt">Starter</div><div className="pp">Rs. 25,000<small> setup</small></div>
              <p>For a single automation to get started.</p>
              <ul><li>1 WhatsApp bot or workflow</li><li>Google Sheets logging</li><li>Roman Urdu + English</li><li>2 weeks delivery</li></ul>
              <a href="#contact" className="btn btn-g btn-lg btn-block">Get started</a>
            </div>
            <div className="price feat reveal">
              <div className="badge">Most popular</div>
              <div className="pt">Growth</div><div className="pp">Rs. 90,000<small> + 15k/mo</small></div>
              <p>A full system for a growing business.</p>
              <ul><li>Bot + lead pipeline + logging</li><li>CRM / Sheets / Airtable sync</li><li>Custom AI responses</li><li>Monthly support &amp; tuning</li></ul>
              <a href="#contact" className="btn btn-p btn-lg btn-block">Book a call</a>
            </div>
            <div className="price reveal">
              <div className="pt">Custom</div><div className="pp">Let&apos;s talk</div>
              <p>For multi-branch or complex builds.</p>
              <ul><li>Multi-branch systems</li><li>Web app + dashboards</li><li>Priority support</li><li>Tailored scope</li></ul>
              <a href="#contact" className="btn btn-g btn-lg btn-block">Request a quote</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="shead ctr reveal"><div className="slabel"><span className="num">05</span> Who we are</div><h2>An automation studio built for results.</h2><p className="ssub">We help businesses replace repetitive work with systems that run on their own.</p></div>
          <div className="about-vals">
            <div className="aval reveal"><div className="cico">◆</div><h3>Systems, not band-aids</h3><p>We don&apos;t sell one-off scripts. We build complete systems that keep working long after launch.</p></div>
            <div className="aval reveal"><div className="cico">◇</div><h3>Direct &amp; hands-on</h3><p>You work directly with the people building your system — no middlemen, no runaround.</p></div>
            <div className="aval reveal"><div className="cico">◈</div><h3>Local &amp; global</h3><p>From cafés and clinics in Pakistan to businesses in the UK &amp; US — we build for both.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" className="alt">
        <div className="wrap">
          <div className="shead ctr reveal"><div className="slabel"><span className="num">06</span> FAQ</div><h2>Good to know.</h2></div>
          <div className="faq">
            <details className="reveal"><summary>How long does it take to build?</summary><p>Most simple bots and automations go live within 2 weeks. Larger, multi-branch systems take a few weeks depending on scope — we give you a clear timeline upfront.</p></details>
            <details className="reveal"><summary>Do we need any technical knowledge?</summary><p>Not at all. You tell us what&apos;s slowing your business down, and we handle the building, launching, and support. You just watch it work.</p></details>
            <details className="reveal"><summary>Which tools do you work with?</summary><p>WhatsApp Business API, n8n, Groq, Google Sheets, Airtable, Supabase, and more. If you already use certain tools, we connect to them.</p></details>
            <details className="reveal"><summary>What happens after launch?</summary><p>We monitor and tune your system, fix anything that comes up, and adjust as your business grows — that&apos;s what monthly support covers.</p></details>
            <details className="reveal"><summary>Can the bot speak Roman Urdu?</summary><p>Yes. Your customers can chat in Roman Urdu, English, or a mix — the bot understands and replies naturally in the same style.</p></details>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-box reveal">
            <div className="contact-l">
              <div className="slabel"><span className="num">◦</span> Let&apos;s talk</div>
              <h2>Let&apos;s build your system.</h2>
              <p>Tell us what&apos;s slowing your business down. We&apos;ll show you what we can automate — free, no pressure.</p>
              <div className="direct">
                <a href="https://wa.me/923294438243">💬 &nbsp; WhatsApp — +92 329 4438243</a>
                <a href="mailto:inamakram227@gmail.com">✉️ &nbsp; inamakram227@gmail.com</a>
              </div>
            </div>
            <div className="contact-r">
              <div className="field"><label>Your name</label><input id="f-name" type="text" placeholder="Ahmed Khan" /></div>
              <div className="field"><label>Business / what you do</label><input id="f-biz" type="text" placeholder="Cafe, clinic, shop…" /></div>
              <div className="field"><label>What do you want to automate?</label><textarea id="f-msg" placeholder="e.g. a WhatsApp bot to take orders…"></textarea></div>
              <button className="btn btn-p btn-lg btn-block" onClick={sendWA}>Send via WhatsApp →</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div className="fabout">
              <div className="logo"><span className="mk">I</span>Insytra</div>
              <p>AI automation systems for businesses that would rather grow than do busywork.</p>
            </div>
            <div className="fcol"><h4>Explore</h4><a href="#services">Services</a><a href="#work">Work</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
            <div className="fcol"><h4>Studio</h4><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
            <div className="fcol"><h4>Get in touch</h4><a href="https://wa.me/923294438243">WhatsApp</a><a href="mailto:inamakram227@gmail.com">Email</a></div>
          </div>
          <div className="fbot"><div className="cr">© 2026 Insytra · All rights reserved.</div><div className="cr">Automation systems · Built in Pakistan 🇵🇰</div></div>
        </div>
      </footer>
    </>
  );
}