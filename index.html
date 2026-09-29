<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>EnCore — плагин для браузера, Shiftex и фэнтези-таверна</title>
<meta name="description" content="EnCore — инди-студия: браузерный плагин Auto Proxy Per Site, мобильное приложение Shiftex для учёта смен и игра — симулятор хозяина таверны с развитием в градостроительство. Поддержите разработку донатом.">
<meta name="theme-color" content="#05070f">
<meta name="color-scheme" content="dark">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2305070f'/%3E%3Cpath d='M18 44 32 14l14 30h-9l-5-12-5 12z' fill='%2322d3ee'/%3E%3Ccircle cx='32' cy='44' r='4' fill='%23a78bfa'/%3E%3C/svg%3E">
<meta property="og:type" content="website">
<meta property="og:title" content="EnCore — tech-студия">
<meta property="og:description" content="Плагин Auto Proxy Per Site • Shiftex — учёт смен • Tavernkeep — от таверны до города. Поддержите нас.">
<meta property="og:image" content="https://example.com/og-cover.png">
<style>
/* ===== TOKENS / RESET (mobile-first, zero deps) ===== */
*,*::before,*::after{box-sizing:border-box}
:root{
  --bg:#05070f; --bg2:#0a0f1e; --card:rgba(255,255,255,.045); --line:rgba(255,255,255,.1);
  --txt:#eef2ff; --mut:#9aa4bf; --mut2:#6b7694;
  --cy:#22d3ee; --vi:#a78bfa; --lm:#a3e635; --pk:#f472b6;
  --r:18px; --r-sm:12px;
  --font:system-ui,-apple-system,"Segoe UI",Roboto,Inter,Arial,sans-serif;
  --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  --sh:0 20px 60px -20px rgba(34,211,238,.35);
  --max:1120px;
}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}
body{margin:0;font-family:var(--font);background:var(--bg);color:var(--txt);line-height:1.6;overflow-x:hidden;
  background-image:radial-gradient(900px 480px at 85% -5%,rgba(167,139,250,.18),transparent 60%),
  radial-gradient(800px 420px at 8% 4%,rgba(34,211,238,.16),transparent 60%),
  radial-gradient(700px 600px at 50% 110%,rgba(163,230,53,.07),transparent 60%);background-attachment:fixed}
img,svg{display:block;max-width:100%}
a{color:inherit}
:focus-visible{outline:2px solid var(--cy);outline-offset:3px;border-radius:6px}
.skip{position:absolute;left:-9999px;top:0;background:var(--cy);color:#001018;padding:.6rem 1rem;z-index:99;border-radius:0 0 10px 0}
.skip:focus{left:0}
.wrap{width:min(var(--max),100% - 2.2rem);margin-inline:auto}
section{padding:clamp(3rem,8vw,5.5rem) 0;scroll-margin-top:84px}
h1,h2,h3{line-height:1.12;margin:0;letter-spacing:-.02em}
h2{font-size:clamp(1.6rem,4.6vw,2.5rem)}
.grad{background:linear-gradient(92deg,var(--cy),var(--vi) 55%,var(--pk));-webkit-background-clip:text;background-clip:text;color:transparent}
.mut{color:var(--mut)} .small{font-size:.9rem} .mono{font-family:var(--mono)}
.eyebrow{display:inline-flex;align-items:center;gap:.5rem;font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--cy);
  border:1px solid rgba(34,211,238,.35);background:rgba(34,211,238,.08);padding:.4rem .8rem;border-radius:999px}
.eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--lm);box-shadow:0 0 12px var(--lm);animation:blink 1.8s infinite}
@keyframes blink{50%{opacity:.35}}
.sec-head{max-width:44rem;margin-bottom:1.6rem}
.sec-head p{color:var(--mut);margin:.8rem 0 0;font-size:clamp(.98rem,2.6vw,1.08rem)}
/* ===== HEADER ===== */
header{position:sticky;top:0;z-index:50;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  background:rgba(5,7,15,.72);border-bottom:1px solid transparent;transition:border-color .25s}
header.scrolled{border-color:var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;gap:1rem;height:68px}
.brand{display:flex;align-items:center;gap:.65rem;text-decoration:none;font-weight:800;font-size:1.05rem;letter-spacing:.02em}
.brand-mark{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;font-weight:900;color:#001018;
  background:linear-gradient(135deg,var(--cy),var(--vi));box-shadow:0 6px 22px -6px rgba(34,211,238,.7)}
.brand small{display:block;font-size:.68rem;font-weight:600;color:var(--mut);letter-spacing:.18em}
.links{display:none;gap:1.4rem;align-items:center}
.links a{text-decoration:none;color:var(--mut);font-weight:600;font-size:.95rem}
.links a:hover,.links a.active{color:var(--txt)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;text-decoration:none;font-weight:800;border-radius:14px;
  padding:.85rem 1.25rem;font-size:.98rem;border:1px solid transparent;cursor:pointer;min-height:48px;transition:transform .15s,box-shadow .2s,background .2s}
.btn:active{transform:scale(.98)}
.btn-p{background:linear-gradient(135deg,var(--cy),#0ea5e9 45%,var(--vi));color:#020617;box-shadow:var(--sh)}
.btn-p:hover{box-shadow:0 24px 70px -18px rgba(167,139,250,.55)}
.btn-g{background:rgba(255,255,255,.06);border-color:var(--line);color:var(--txt)}
.btn-g:hover{border-color:rgba(34,211,238,.5);background:rgba(34,211,238,.08)}
.btn-sm{padding:.6rem .95rem;min-height:42px;font-size:.9rem;border-radius:11px}
.burger{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.05);color:var(--txt)}
.burger svg{width:22px;height:22px}
.mmenu{display:none;border-top:1px solid var(--line);padding:.7rem 0 1rem}
.mmenu.open{display:block}
.mmenu a{display:block;padding:.85rem .4rem;text-decoration:none;font-weight:700;border-radius:10px}
.mmenu a:hover{background:rgba(255,255,255,.05)}
.mmenu .btn{width:100%;margin-top:.5rem}
@media(min-width:900px){.links{display:flex}.burger,.mmenu{display:none}}
/* ===== HERO ===== */
.hero{padding:clamp(2.2rem,7vw,4.5rem) 0 clamp(2.5rem,6vw,4rem);position:relative}
.hero-grid{display:grid;gap:1.6rem}
@media(min-width:960px){.hero-grid{grid-template-columns:1.05fr .95fr;align-items:center;gap:2.5rem}}
.hero h1{font-size:clamp(2.1rem,7.4vw,3.9rem);margin:1rem 0 .9rem}
.hero p.lead{color:var(--mut);font-size:clamp(1rem,3vw,1.18rem);margin:0 0 1.4rem;max-width:34rem}
.cta{display:flex;flex-direction:column;gap:.7rem}
@media(min-width:520px){.cta{flex-direction:row;flex-wrap:wrap}}
.trust{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.1rem;padding:0;list-style:none}
.trust li{font-size:.82rem;color:var(--mut);border:1px solid var(--line);border-radius:999px;padding:.35rem .75rem;background:rgba(255,255,255,.03)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;margin-top:1.4rem}
.stat{background:var(--card);border:1px solid var(--line);border-radius:var(--r-sm);padding:.85rem .7rem;text-align:center}
.stat b{display:block;font-size:clamp(1.15rem,4vw,1.6rem)}
.stat span{font-size:.76rem;color:var(--mut)}
/* terminal card */
.term{background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.02));border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 30px 80px -30px rgba(0,0,0,.8)}
.term-bar{display:flex;align-items:center;gap:.45rem;padding:.8rem 1rem;border-bottom:1px solid var(--line);background:rgba(0,0,0,.25)}
.dot{width:11px;height:11px;border-radius:50%}
.term-body{padding:1rem 1.1rem 1.2rem;font-family:var(--mono);font-size:.84rem}
.line{display:flex;justify-content:space-between;gap:1rem;padding:.5rem .7rem;border-radius:10px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.06);margin-bottom:.5rem}
.ok{color:var(--lm)} .warn{color:#fcd34d} .cy{color:var(--cy)}
.pingbar{height:8px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;margin-top:.45rem}
.pingbar i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cy),var(--lm));animation:load 2.4s ease-in-out infinite}
@keyframes load{0%{width:12%}50%{width:86%}100%{width:12%}}
.live{display:inline-flex;align-items:center;gap:.45rem;font-size:.75rem;color:var(--lm);font-weight:700;letter-spacing:.08em}
.live::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--lm);box-shadow:0 0 10px var(--lm);animation:blink 1.4s infinite}
/* ===== MARQUEE ===== */
.strip{border-block:1px solid var(--line);background:rgba(255,255,255,.02);overflow:hidden;padding:.85rem 0;white-space:nowrap}
.strip div{display:inline-block;padding-left:1rem;animation:mar 26s linear infinite;font-family:var(--mono);font-size:.85rem;color:var(--mut)}
@keyframes mar{to{transform:translateX(-50%)}}
/* ===== CARDS ===== */
.grid{display:grid;gap:1rem}
@media(min-width:760px){.grid.cols3{grid-template-columns:repeat(3,1fr)}.grid.cols2{grid-template-columns:repeat(2,1fr)}}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:1.3rem;position:relative;overflow:hidden;
  transition:transform .2s,border-color .2s,box-shadow .25s}
.card:hover{transform:translateY(-4px);border-color:rgba(34,211,238,.4);box-shadow:var(--sh)}
.card::after{content:"";position:absolute;inset:0 0 auto 0;height:2px;background:linear-gradient(90deg,transparent,var(--cy),var(--vi),transparent);opacity:.7}
.tagrow{display:flex;flex-wrap:wrap;gap:.4rem;margin:.8rem 0}
.tag{font-size:.72rem;font-weight:700;letter-spacing:.04em;padding:.28rem .6rem;border-radius:999px;border:1px solid var(--line);color:var(--mut);background:rgba(0,0,0,.25)}
.tag.hot{color:#001018;background:linear-gradient(135deg,var(--lm),var(--cy));border-color:transparent}
.tag.soon{color:var(--vi);border-color:rgba(167,139,250,.4);background:rgba(167,139,250,.1)}
.card h3{font-size:1.22rem}
.card p{color:var(--mut);font-size:.95rem;margin:.6rem 0 0}
.feat{display:flex;gap:.6rem;align-items:flex-start;margin-top:.7rem;font-size:.9rem;color:#cdd5ec}
.feat svg{flex:none;width:18px;height:18px;margin-top:.2rem}
.card-foot{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.1rem}
.icon{width:44px;height:44px;border-radius:13px;display:grid;place-items:center;font-size:1.3rem;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.3)}
/* steps */
.steps{display:grid;gap:.8rem;counter-reset:s}
@media(min-width:860px){.steps{grid-template-columns:repeat(4,1fr)}}
.step{background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:16px;padding:1.1rem}
.step b{display:flex;align-items:center;gap:.6rem}
.step b::before{counter-increment:s;content:counter(s);width:28px;height:28px;flex:none;border-radius:9px;display:grid;place-items:center;font-size:.85rem;color:#001018;background:linear-gradient(135deg,var(--cy),var(--vi))}
.step p{color:var(--mut);font-size:.9rem;margin:.55rem 0 0}
/* ===== DONATE ===== */
#donate .panel{background:linear-gradient(180deg,rgba(34,211,238,.1),rgba(167,139,250,.08) 55%,rgba(244,114,182,.06));
  border:1px solid rgba(34,211,238,.3);border-radius:22px;padding:clamp(1.3rem,4vw,2.2rem);position:relative;overflow:hidden}
.d-grid{display:grid;gap:.8rem;margin-top:1.3rem}
@media(min-width:820px){.d-grid{grid-template-columns:repeat(2,1fr)}}
.d-card{display:flex;gap:.9rem;align-items:flex-start;background:rgba(5,7,15,.6);border:1px solid var(--line);border-radius:16px;padding:1.05rem;text-decoration:none}
.d-card:hover{border-color:rgba(163,230,53,.5)}
.d-card b{display:block} .d-card span{color:var(--mut);font-size:.88rem}
.d-card .go{margin-left:auto;flex:none;color:var(--cy);font-weight:800}
.crypto{background:rgba(0,0,0,.35);border:1px dashed rgba(163,230,53,.45);border-radius:14px;padding:1rem;margin-top:.9rem}
.addr{display:flex;flex-direction:column;gap:.55rem;margin-top:.7rem}
@media(min-width:560px){.addr{flex-direction:row}}
.addr code{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:#020617;border:1px solid var(--line);border-radius:10px;padding:.7rem .8rem;font-size:.8rem;color:var(--lm)}
.copy{border:1px solid rgba(163,230,53,.5);background:rgba(163,230,53,.12);color:var(--lm);border-radius:10px;padding:.7rem 1rem;font-weight:800;cursor:pointer;min-height:44px}
/* faq */
details{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1rem 1.1rem;margin-bottom:.7rem}
summary{cursor:pointer;font-weight:800;list-style:none;display:flex;justify-content:space-between;gap:1rem;align-items:center}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";flex:none;width:30px;height:30px;display:grid;place-items:center;border-radius:9px;background:rgba(34,211,238,.12);color:var(--cy);font-size:1.2rem}
details[open] summary::after{content:"–"}
details p{color:var(--mut);font-size:.94rem}
/* contacts/footer */
.c-grid{display:grid;gap:1rem}
@media(min-width:860px){.c-grid{grid-template-columns:1fr 1fr}}
.mail{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1rem 1.1rem;text-decoration:none;font-weight:700}
.mail:hover{border-color:rgba(34,211,238,.45)}
footer{border-top:1px solid var(--line);padding:1.6rem 0 2.4rem;color:var(--mut2);font-size:.85rem}
.f-row{display:flex;flex-direction:column;gap:.8rem}
@media(min-width:720px){.f-row{flex-direction:row;justify-content:space-between;align-items:center}}
/* reveal */
.rv{opacity:0;transform:translateY(18px);transition:opacity .6s,transform .6s}
.rv.in{opacity:1;transform:none}
.fab{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:60;display:none;align-items:center;gap:.5rem;
  background:linear-gradient(135deg,var(--lm),var(--cy));color:#04120a;font-weight:900;text-decoration:none;border-radius:999px;padding:.9rem 1.15rem;box-shadow:0 16px 40px -12px rgba(163,230,53,.6);min-height:52px}
.fab.show{display:inline-flex}
@media(min-width:900px){.fab{right:22px;bottom:22px}}
</style>
</head>
<body>
<a class="skip" href="#projects">Перейти к проектам</a>

<header id="top">
  <div class="wrap">
    <nav class="nav" aria-label="Основная навигация">
      <a class="brand" href="#top" aria-label="EnCore — на главную">
        <span class="brand-mark" aria-hidden="true">E</span>
        <span>EnCore<small>PLUGIN • SHIFTEX • TAVERNKEEP</small></span>
      </a>
      <div class="links" id="deskLinks">
        <a href="#projects">Проекты</a>
        <a href="#why">Почему мы</a>
        <a href="#how">Как устроено</a>
        <a href="#faq">FAQ</a>
        <a class="btn btn-p btn-sm" href="#donate">❤ Поддержать</a>
      </div>
      <button class="burger" id="burger" aria-expanded="false" aria-controls="mmenu" aria-label="Открыть меню">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </nav>
    <div class="mmenu" id="mmenu">
      <a href="#projects">Проекты</a>
      <a href="#why">Почему мы</a>
      <a href="#how">Как устроено</a>
      <a href="#faq">FAQ</a>
      <a class="btn btn-p" href="#donate">❤ Поддержать проект</a>
    </div>
  </div>
</header>

<main>
<!-- HERO -->
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow"><i></i>EnCore • работаем в открытую</span>
      <h1>EnCore: <span class="grad">плагин, Shiftex и таверна</span></h1>
      <p class="lead">Три продукта студии: <b style="color:var(--txt)">Auto Proxy Per Site</b> — умное Chrome-расширение с автоподбором прокси, <b style="color:var(--txt)">Shiftex</b> — учёт смен для команд, и <b style="color:var(--txt)">Tavernkeep</b> — симулятор хозяина таверны с ростом до градостроительства.</p>
      <div class="cta">
        <a class="btn btn-p" href="#projects">🚀 Смотреть проекты</a>
        <a class="btn btn-g" href="#donate">❤ Поддержать донатом</a>
      </div>
      <ul class="trust" aria-label="Преимущества">
        <li>🧩 Плагин v1.0 в релизе</li>
        <li>📱 Shiftex в разработке</li>
        <li>🍺 Tavernkeep в концепте</li>
        <li>🔒 Privacy-first</li>
      </ul>
      <div class="stats" role="list" aria-label="Цифры студии">
        <div class="stat" role="listitem"><b class="grad">3</b><span>проекта</span></div>
        <div class="stat" role="listitem"><b class="grad">v1.0</b><span>плагин в проде</span></div>
        <div class="stat" role="listitem"><b class="grad">2</b><span>в разработке</span></div>
      </div>
    </div>
    <div class="term rv" aria-label="Демонстрация работы расширения">
      <div class="term-bar"><span class="dot" style="background:#f87171"></span><span class="dot" style="background:#fbbf24"></span><span class="dot" style="background:#34d399"></span><span class="small mut mono" style="margin-left:.4rem">encore • pool monitor</span><span class="live" style="margin-left:auto">LIVE</span></div>
      <div class="term-body">
        <div class="line"><span>▸ pool refresh · 42 proxies</span><span class="ok">OK 280ms</span></div>
        <div class="line"><span>▸ ewma ping · p50 / p95</span><span class="cy">184 / 410 ms</span></div>
        <div class="line"><span>▸ active → 91.205.x.x:8080</span><span class="ok">● verified</span></div>
        <div class="line"><span>▸ failover guard · hysteresis 3</span><span class="warn">armed</span></div>
        <div class="pingbar" aria-hidden="true"><i></i></div>
        <p class="small mut" style="margin:.7rem 0 0">PAC per-site • auth • early-exit тесты • метрики пула. Всё локально, в вашем браузере.</p>
      </div>
    </div>
  </div>
</section>

<div class="strip" aria-hidden="true"><div>ENCORE&ensp;•&ensp;CHROME MV3&ensp;•&ensp;PAC PER-SITE&ensp;•&ensp;SHIFTEX&ensp;•&ensp;УЧЁТ СМЕН&ensp;•&ensp;TAVERNKEEP&ensp;•&ensp;TAVERN SIM&ensp;•&ensp;CITY-BUILDER&ensp;•&ensp;DARK FANTASY&ensp;•&ensp;ENCORE&ensp;•&ensp;CHROME MV3&ensp;•&ensp;PAC PER-SITE&ensp;•&ensp;SHIFTEX&ensp;•&ensp;УЧЁТ СМЕН&ensp;•&ensp;TAVERNKEEP&ensp;•&ensp;TAVERN SIM&ensp;•&ensp;CITY-BUILDER&ensp;•&ensp;DARK FANTASY&ensp;•&ensp;</div></div>

<!-- PROJECTS -->
<section id="projects">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow"><i></i>Проекты EnCore</span>
      <h2 style="margin-top:.8rem">Один релиз в проде, <span class="grad">два — в работе</span></h2>
      <p>Честно показываем статус каждого продукта: что готово, что в разработке и куда идут донаты.</p>
    </div>
    <div class="grid cols3">
      <article class="card rv">
        <div class="icon" aria-hidden="true">🧭</div>
        <div class="tagrow"><span class="tag hot">● RELEASED v1.0</span><span class="tag">Chrome MV3</span><span class="tag">Флагман</span></div>
        <h3>Auto Proxy Per Site</h3>
        <p>Наш браузерный плагин: автоподбор лучшего прокси под каждый сайт — сбор пула, двухфазные тесты с early-exit, EWMA-рейтинг, мгновенный failover, PAC per-site, авторизация и метрики. Всё считается локально.</p>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Умный пул: rank + история + blacklist</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>PAC-изоляция: прокси только там, где нужно</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Приватность: без внешних серверов</span></div>
        <div class="tagrow"><span class="tag">proxy</span><span class="tag">pac</span><span class="tag">offscreen</span><span class="tag">alarms</span></div>
        <div class="card-foot">
          <a class="btn btn-p btn-sm" href="#donate">Поддержать ❤</a>
          <a class="btn btn-g btn-sm" href="#" onclick="return false" aria-label="GitHub скоро">GitHub · soon</a>
        </div>
      </article>
      <article class="card rv">
        <div class="icon" aria-hidden="true">📋</div>
        <div class="tagrow"><span class="tag soon">◐ IN DEVELOPMENT</span><span class="tag">iOS + Android</span></div>
        <h3>Shiftex</h3>
        <p>Мобильное приложение для управления сменами и их учёта: расписание, табель, часы и ставки, замены и уведомления. Для малого бизнеса, кафе, складов и охраны — без сложных ERP.</p>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Смены, табель и зарплата в одном месте</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Роли: админ, менеджер, сотрудник</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Offline-first и push о заменах</span></div>
        <div class="tagrow"><span class="tag">shiftex</span><span class="tag">schedule</span><span class="tag">payroll</span></div>
        <div class="card-foot">
          <a class="btn btn-g btn-sm" href="#donate">Ускорить релиз ❤</a>
        </div>
      </article>
      <article class="card rv">
        <div class="icon" aria-hidden="true">🍺</div>
        <div class="tagrow"><span class="tag soon">○ CONCEPT</span><span class="tag">PC + Mobile</span></div>
        <h3>Tavernkeep</h3>
        <p>Симулятор хозяина таверны в мире мрачного фэнтези: вари эль, принимай охотников на чудовищ, расширяй зал — и вырасти от одной корчмы до целого города с экономикой и управлением.</p>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a3e635" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Таверна → квартал → город: градостроительство</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a3e635" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Экономика, репутация и случайные события</span></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="#a3e635" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span>Оригинальный мир в духе тёмного фэнтези*</span></div>
        <div class="tagrow"><span class="tag">tavern-sim</span><span class="tag">city-builder</span><span class="tag">management</span></div>
        <div class="card-foot">
          <a class="btn btn-g btn-sm" href="#donate">В титры ❤</a>
        </div>
      </article>
    </div>
    <p class="small mut" style="margin-top:1rem">*Tavernkeep — оригинальная вселенная EnCore, вдохновлённая эстетикой тёмного фэнтези. Не является официальным продуктом по мотивам «Ведьмака» и не аффилирована с правообладателями.</p>
  </div>
</section>

<!-- WHY -->
<section id="why" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow"><i></i>Почему EnCore</span>
      <h2 style="margin-top:.8rem">Корпоративные принципы, <span class="grad">инди-скорость</span></h2>
    </div>
    <div class="grid cols3">
      <div class="card rv"><div class="icon">🔒</div><h3 style="margin-top:.7rem">Privacy-first</h3><p>Никакой аналитики, которая следит за вами. Метрики расширения живут только в вашем браузере (chrome.storage).</p></div>
      <div class="card rv"><div class="icon">⚡</div><h3 style="margin-top:.7rem">Performance</h3><p>Early-exit тесты, EWMA-сглаживание пинга, PAC без лишних переключений. Этот сайт — один HTML-файл без трекеров.</p></div>
      <div class="card rv"><div class="icon">🗺</div><h3 style="margin-top:.7rem">Open Roadmap</h3><p>Публичные статусы, честные «soon» и отчёты за донаты: каждый рубль видно в прогрессе проектов.</p></div>
    </div>
  </div>
</section>

<!-- HOW -->
<section id="how" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow"><i></i>Как устроен флагман</span>
      <h2 style="margin-top:.8rem">4 шага до быстрого сайта</h2>
    </div>
    <div class="steps rv">
      <div class="step"><b>Сбор пула</b><p>Собираем сырые прокси из источников и чистим историю.</p></div>
      <div class="step"><b>Тесты</b><p>Двухфазная проверка пинга и exit-IP, early-exit для скорости.</p></div>
      <div class="step"><b>Рейтинг</b><p>EWMA + score: лучший прокси становится активным.</p></div>
      <div class="step"><b>Защита</b><p>Failover с гистерезисом и PAC только для ваших сайтов.</p></div>
    </div>
  </div>
</section>

<!-- DONATE -->
<section id="donate" style="padding-top:0">
  <div class="wrap">
    <div class="panel rv">
      <span class="eyebrow"><i></i>Поддержка студии</span>
      <h2 style="margin:.8rem 0 .5rem">Ваш донат = <span class="grad">скорость релизов</span></h2>
      <p class="mut" style="margin:0;max-width:38rem">Мы независимы: без инвесторов и рекламы. Деньги идут на серверы для тестов пула плагина, аккаунты разработчиков Shiftex и арт для Tavernkeep. Выберите удобный способ — все кнопки-заглушки легко заменить на ваши ссылки.</p>
      <div class="d-grid">
        <!-- ★★★ ЗАМЕНИТЕ href="#" на ваши реальные ссылки ★★★ -->
        <a class="d-card" id="dBoosty" href="#" target="_blank" rel="noopener"><span class="icon">☕</span><span><b>Boosty — подписка</b><span>Лучший вариант для RU: ежемесячная поддержка от 100 ₽</span></span><span class="go">→</span></a>
        <a class="d-card" id="dPatreon" href="#" target="_blank" rel="noopener"><span class="icon">💜</span><span><b>Patreon / DonationAlerts</b><span>Для международной аудитории, цели и rewards</span></span><span class="go">→</span></a>
        <a class="d-card" id="dCard" href="#" target="_blank" rel="noopener"><span class="icon">💳</span><span><b>Разовый донат с карты</b><span>CloudTips / DonatePay — без подписки, за 1 минуту</span></span><span class="go">→</span></a>
        <a class="d-card" id="dGithub" href="#" target="_blank" rel="noopener"><span class="icon">⭐</span><span><b>GitHub Sponsors</b><span>Поддержка кода напрямую + бейдж спонсора</span></span><span class="go">→</span></a>
      </div>
      <div class="crypto">
        <b>🪙 Крипта — без комиссий платформ</b>
        <div class="small mut">Нажмите «Копировать» — адрес подставится из конфига внизу страницы.</div>
        <div class="addr">
          <code id="cryptoAddr" class="mono">0x0000…замените-адрес-в-CONFIG…0000</code>
          <button class="copy" id="copyBtn" type="button">Копировать</button>
        </div>
      </div>
      <p class="small mut" id="copyMsg" role="status" aria-live="polite" style="min-height:1.4em;margin:.6rem 0 0"></p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq" style="padding-top:0">
  <div class="wrap" style="max-width:760px">
    <div class="sec-head rv">
      <span class="eyebrow"><i></i>FAQ</span>
      <h2 style="margin-top:.8rem">Частые вопросы</h2>
    </div>
    <details class="rv" open><summary>Куда пойдут донаты?</summary><p>Приоритет: серверы для проверки прокси-пула плагина → аккаунты Google Play / App Store для Shiftex → арт и звук для Tavernkeep. Отчёты публикуем в обновлениях проектов.</p></details>
    <details class="rv"><summary>Плагин бесплатный? А Shiftex?</summary><p>Да. Auto Proxy Per Site бесплатен и работает локально. Shiftex выйдет с бесплатным тарифом для маленьких команд. Донат — добровольный способ ускорить новые фичи.</p></details>
    <details class="rv"><summary>Что за игра Tavernkeep?</summary><p>Оригинальная игра в духе тёмного фэнтези: начинаете хозяином придорожной таверны, заканчиваете правителем города. Никакого готового IP — свой мир, свои монстры, свои истории.</p></details>
    <details class="rv"><summary>Как заменить ссылки-заглушки?</summary><p>Откройте этот файл и в блоке CONFIG внизу впишите свои URL (Boosty, Patreon, карта, криптокошелёк). Всё подписано — займёт 2 минуты.</p></details>
    <details class="rv"><summary>Можно предложить фичу или игру?</summary><p>Да, напишите на почту ниже. Лучшие идеи попадают в roadmap, а авторы — в титры.</p></details>
  </div>
</section>

<!-- CONTACTS -->
<section id="contacts" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head rv">
      <span class="eyebrow"><i></i>Контакты</span>
      <h2 style="margin-top:.8rem">На связи <span class="grad">без бюрократии</span></h2>
    </div>
    <div class="c-grid rv">
      <a class="mail" href="mailto:hello@example.com">✉️ hello@example.com <span class="cy">→</span></a>
      <a class="mail" href="#" onclick="return false">💬 Telegram-канал · soon <span class="cy">→</span></a>
    </div>
  </div>
</section>
</main>

<footer>
  <div class="wrap f-row">
    <span>© <span id="year">2026</span> EnCore · Сделано с ❤ и нулевым трекингом</span>
    <span class="mono small">plugin • shiftex • tavernkeep</span>
  </div>
</footer>

<a class="fab" id="fab" href="#donate" aria-label="Поддержать">❤ Поддержать</a>

<script>
/* ============================================================
   ★ CONFIG — ЗАМЕНИТЕ ЗАГЛУШКИ НА СВОИ ССЫЛКИ (2 минуты) ★
   ============================================================ */
const CONFIG = {
  boosty:   "#", // например: "https://boosty.to/yourname"
  patreon:  "#", // например: "https://patreon.com/yourname"
  card:     "#", // например: "https://pay.cloudtips.ru/p/xxxx"
  github:   "#", // например: "https://github.com/sponsors/yourname"
  crypto:   "0x0000…замените-адрес-в-CONFIG…0000", // ваш BTC/ETH/USDT адрес
  email:    "hello@example.com"
};
document.getElementById('dBoosty').href  = CONFIG.boosty;
document.getElementById('dPatreon').href = CONFIG.patreon;
document.getElementById('dCard').href    = CONFIG.card;
document.getElementById('dGithub').href  = CONFIG.github;
document.getElementById('cryptoAddr').textContent = CONFIG.crypto;

/* ===== UI: burger / header / reveal / fab / copy (vanilla, <2KB) ===== */
const burger = document.getElementById('burger'),
      mmenu  = document.getElementById('mmenu'),
      header = document.querySelector('header'),
      fab    = document.getElementById('fab');
burger.addEventListener('click', () => {
  const open = mmenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
mmenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mmenu.classList.remove('open'); burger.setAttribute('aria-expanded','false');
}));
const onScroll = () => {
  header.classList.toggle('scrolled', scrollY > 8);
  fab.classList.toggle('show', scrollY > innerHeight * 0.9);
};
addEventListener('scroll', onScroll, {passive:true}); onScroll();

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), {threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* active nav highlight */
const secs = ['projects','why','how','faq'].map(id => document.getElementById(id));
const navA = [...document.querySelectorAll('#deskLinks a[href^="#"]')];
const nio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  navA.forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id));
}), {rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s => s && nio.observe(s));

/* copy crypto */
const msg = document.getElementById('copyMsg');
document.getElementById('copyBtn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(CONFIG.crypto); msg.textContent = '✅ Адрес скопирован. Спасибо за поддержку!'; }
  catch { msg.textContent = 'Адрес: ' + CONFIG.crypto; }
  setTimeout(() => msg.textContent = '', 4000);
});
document.getElementById('year').textContent = new Date().getFullYear();
</script>
</body>
</html>
