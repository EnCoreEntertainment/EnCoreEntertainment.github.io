/* ============================================================
   EnCore — блок «Площадки и донаты» (общий для всех страниц)
   ------------------------------------------------------------
   Подключение — две строки в любое место страницы:

       <div class="support-mount"></div>
       <script src="/support.js"></script>

   Путь к файлу абсолютный — так одна и та же строка работает и на
   корневой странице (/), и на вложенной (/auto-proxy/).
   Поставьте эти две строки там, где должен появиться блок.
   Стили и разметка вшиты в этот файл и ограничены селектором
   .enc-support — на оформление принимающей страницы не влияют
   и не зависят от неё. Ссылки правятся один раз в CONFIG ниже.

   Работает только на том же домене (file:// не поддерживается).
   ============================================================ */
(function () {
  'use strict';

  /* ===== ваши ссылки поддержки ===== */
  var CONFIG = {
    card:   "#", // например: "https://pay.cloudtips.ru/p/xxxx"
    github: "#", // например: "https://github.com/sponsors/yourname"
    crypto: "TLtYU2RcRAZGHE1YfdLuPDSMjqRudZNdQ2" // USDT · сеть TRC20 (TRON)
  };

  /* ===== стили блока (живут только внутри .enc-support) ===== */
  var CSS = `
.enc-support{
  --cy:#22d3ee; --lm:#a3e635; --txt:#d7f5fb; --mut:#6f8ba0;
  --line:rgba(34,211,238,.16); --line2:rgba(255,255,255,.1);
  --font:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;
  padding:clamp(2.6rem,6vw,4.4rem) 0; scroll-margin-top:74px;
}
.enc-support .wrap{width:min(var(--max,1080px),100% - 2rem);margin-inline:auto}
.enc-support h2{font-size:clamp(1.25rem,3.4vw,1.8rem);margin:0 0 1.3rem;color:var(--cy)}
.enc-support p{margin:.5rem 0}
.enc-support .small{font-size:.85rem}
.enc-support .mut{color:var(--mut)}
.enc-support .tag{display:inline-block;font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;color:var(--lm);border:1px solid rgba(163,230,53,.35);padding:.32rem .7rem;margin-bottom:1.1rem}
.enc-support .panel{border:1px solid var(--line2);background:linear-gradient(180deg,rgba(34,211,238,.07),rgba(167,139,250,.05));border-radius:8px;padding:clamp(1.2rem,3.5vw,2rem)}
.enc-support .p-grid{display:grid;gap:.8rem;margin-top:1.2rem}
@media(min-width:820px){.enc-support .p-grid{grid-template-columns:repeat(3,1fr)}}
.enc-support .p-card{display:flex;gap:.8rem;align-items:flex-start;background:rgba(4,6,11,.75);border:1px solid var(--line2);border-radius:6px;padding:1rem;text-decoration:none;color:var(--txt);transition:border-color .2s}
.enc-support .p-card:hover{border-color:var(--cy)}
.enc-support .p-card .ico{width:40px;height:40px;flex:none;display:grid;place-items:center;border:1px solid var(--line);border-radius:6px;background:rgba(34,211,238,.07);font-size:1.1rem}
.enc-support .p-card b{display:block;font-size:.92rem}
.enc-support .p-card span{display:block;color:var(--mut);font-size:.78rem;word-break:break-all}
.enc-support .p-card .go{margin-left:auto;color:var(--cy)}
.enc-support .d-grid{display:grid;gap:.8rem;margin-top:1rem}
@media(min-width:820px){.enc-support .d-grid{grid-template-columns:repeat(2,1fr)}}
.enc-support .d-card{display:flex;gap:.8rem;align-items:flex-start;background:rgba(4,6,11,.75);border:1px solid var(--line2);border-radius:6px;padding:1rem;text-decoration:none;color:var(--txt)}
.enc-support .d-card:hover{border-color:rgba(163,230,53,.55)}
.enc-support .d-card b{display:block;font-size:.92rem}
.enc-support .d-card span{display:block;color:var(--mut);font-size:.78rem}
.enc-support .d-card .go{margin-left:auto;color:var(--lm)}
.enc-support .crypto{border:1px dashed rgba(163,230,53,.45);border-radius:6px;padding:1rem;margin-top:.9rem;background:rgba(0,0,0,.35)}
.enc-support .addr{display:flex;flex-direction:column;gap:.5rem;margin-top:.6rem}
@media(min-width:560px){.enc-support .addr{flex-direction:row}}
.enc-support .addr code{flex:1;word-break:break-all;background:#020617;border:1px solid var(--line2);border-radius:4px;padding:.65rem .75rem;font-size:.78rem;color:var(--lm)}
.enc-support .copy{border:1px solid rgba(163,230,53,.5);background:rgba(163,230,53,.12);color:var(--lm);border-radius:4px;padding:.65rem 1rem;font-family:var(--font);font-weight:700;cursor:pointer;min-height:42px}
.enc-support #copyMsg{min-height:1.3em;color:var(--lm);font-size:.82rem;margin:.5rem 0 0}
`;

  /* ===== разметка блока ===== */
  var HTML = `
<section id="support" class="enc-support">
  <div class="wrap">
    <div class="panel">
      <span class="tag">◇ поддержка · общие площадки студии</span>
      <h2 style="margin-bottom:.4rem">Площадки и донаты</h2>
      <p class="small mut" style="margin:0">Единое оформление EnCore на всех площадках. Донаты и подписки — только здесь.</p>

      <div class="p-grid">
        <a class="p-card" href="https://www.twitch.tv/enki1l" target="_blank" rel="noopener"><span class="ico">🎬</span><span><b>Twitch</b><span>twitch.tv/enki1l</span></span><span class="go">→</span></a>
        <a class="p-card" href="https://dalink.to/encpre" target="_blank" rel="noopener"><span class="ico">❤</span><span><b>DonationAlerts</b><span>dalink.to/encpre</span></span><span class="go">→</span></a>
        <a class="p-card" href="https://boosty.to/encore.ent" target="_blank" rel="noopener"><span class="ico">☕</span><span><b>Boosty</b><span>boosty.to/encore.ent</span></span><span class="go">→</span></a>
      </div>

      <div class="d-grid">
        <a class="d-card" href="https://boosty.to/encore.ent" target="_blank" rel="noopener"><span class="ico">☕</span><span><b>Boosty — подписка</b><span>Ежемесячная поддержка от 100 ₽, ранний доступ</span></span><span class="go">→</span></a>
        <a class="d-card" href="https://dalink.to/encpre" target="_blank" rel="noopener"><span class="ico">❤</span><span><b>DonationAlerts — разовый донат</b><span>Любая сумма, цели и оповещения</span></span><span class="go">→</span></a>
        <a class="d-card" id="dCard" href="#" target="_blank" rel="noopener"><span class="ico">💳</span><span><b>Разовый донат с карты</b><span>CloudTips / DonatePay — за 1 минуту</span></span><span class="go">→</span></a>
        <a class="d-card" id="dGithub" href="#" target="_blank" rel="noopener"><span class="ico">⭐</span><span><b>GitHub Sponsors</b><span>Поддержка кода напрямую</span></span><span class="go">→</span></a>
      </div>

      <div class="crypto">
        <b>🪙 USDT · сеть TRC20 (TRON)</b>
        <div class="small mut">Отправляйте только USDT в сети TRC20 — в другой сети средства не придут. Нажмите «Копировать», чтобы не ошибиться.</div>
        <div class="addr">
          <code id="cryptoAddr">TLtYU2RcRAZGHE1YfdLuPDSMjqRudZNdQ2</code>
          <button class="copy" id="copyBtn" type="button">Копировать</button>
        </div>
        <p id="copyMsg" role="status" aria-live="polite"></p>
      </div>
    </div>
  </div>
</section>
`;

  /* ===== подключение к странице ===== */
  function render() {
    var hosts = document.querySelectorAll('.support-mount');
    if (!hosts.length) return false;

    if (!document.getElementById('enc-support-style')) {
      var st = document.createElement('style');
      st.id = 'enc-support-style';
      st.textContent = CSS;
      document.head.appendChild(st);
    }

    for (var i = 0; i < hosts.length; i++) {
      var host = hosts[i];
      if (host.getAttribute('data-support-done')) continue;
      host.innerHTML = HTML;
      host.setAttribute('data-support-done', '1');
      wire(host);
    }
    return true;
  }

  function wire(host) {
    var card   = host.querySelector('#dCard');
    var github = host.querySelector('#dGithub');
    var addr   = host.querySelector('#cryptoAddr');
    var btn    = host.querySelector('#copyBtn');
    var msg    = host.querySelector('#copyMsg');
    if (!card || !github || !addr || !btn || !msg) return;

    card.href = CONFIG.card;
    github.href = CONFIG.github;
    addr.textContent = CONFIG.crypto;

    btn.addEventListener('click', function () {
      var done = function () { msg.textContent = '✓ Адрес скопирован. Спасибо за поддержку!'; };
      var fail = function () { msg.textContent = 'USDT · TRC20: ' + CONFIG.crypto; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONFIG.crypto).then(done, fail);
      } else {
        fail();
      }
      setTimeout(function () { msg.textContent = ''; }, 4000);
    });
  }

  // Якорь #support появляется на странице только после этой инъекции, поэтому
  // стандартная прокрутка браузера к фрагменту уже выполнена — и не нашла
  // цели. Повторяем её сами. lastY не даёт утащить прокрутку, если посетитель
  // к моменту load уже сам куда-то переместился.
  var lastY = null;

  function scrollToHash() {
    if (!location.hash || location.hash.length < 2) return false;
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return false; }
    var el = id ? document.getElementById(id) : null;
    if (!el || !el.scrollIntoView) return false;
    el.scrollIntoView({ block: 'start' });
    lastY = window.pageYOffset;
    return true;
  }

  if (render()) {
    scrollToHash();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      if (render()) scrollToHash();
    });
  }

  window.addEventListener('load', function () {
    if (lastY === null || window.pageYOffset === lastY) scrollToHash();
  });
})();
