/* ============================================================
   DFNS Design System — shared top navigation (single source)
   Included by both / (Guidelines) and /docs/ (Library).
   Renders one identical nav bar, context-aware links, hash-based
   active state, and a theme toggle synced across both pages.
   ============================================================ */
(function () {
  var onDocs = /\/docs(\/|$)/.test(location.pathname);
  var HOME = onDocs ? '../' : './';        // Guidelines home (index.html)
  var DOCS = onDocs ? './' : './docs/';    // Library (docs/index.html)

  var LOGO = '<svg viewBox="0 0 3550 900" aria-hidden="true"><path d="M1024.31 432.16L787.068 21.32C779.328 8.16 765.428 0.12 750.128 0H275.588C262.688 0.12 250.728 6.94 244.368 17.94L4.76815 432.02C-1.69185 443.18 -1.53185 456.78 4.90815 467.82L241.888 878.76C249.628 891.92 263.708 899.98 278.808 900H753.608C766.408 900.06 778.208 893.12 784.568 882.14L1024.17 468.06C1030.53 457.08 1030.49 443.3 1024.15 432.08L1024.31 432.18V432.16ZM854.948 464.14L697.008 737.36C691.948 746.12 682.748 751.34 672.608 751.46L389.208 751.52C367.608 751.66 354.008 728.02 364.828 709.3L510.248 457.74C515.408 448.82 515.268 437.96 510.008 429.22L509.728 429.3L366.228 191.32C354.828 172.6 368.448 148.64 390.408 148.7L672.648 148.66C682.688 148.72 691.968 154.06 697.048 162.72L854.948 436.04C860.028 444.7 860.008 455.44 854.948 464.2V464.14Z"/><path d="M1463.77 144.16L1463.75 144.18C1643.41 144.18 1770.75 249.54 1770.75 450.099C1770.75 650.659 1634.77 756.019 1455.11 756.019H1245.05L1244.91 755.859V144.16H1463.77ZM2885.67 696.14H2885.63C2885.63 716.12 2885.67 736.08 2885.63 756.019H2768.59C2731.27 756.019 2697.49 734.02 2682.37 699.92L2494.95 296.98V756.019H2370.43V203.9H2370.47C2370.47 184.02 2370.43 164.14 2370.47 144.32H2492.83C2530.01 144.32 2563.73 166.179 2578.91 200.119L2761.15 607.72V144H2885.67V696.14ZM3478.39 253.84H3172.65C3129.13 253.84 3101.19 276.36 3101.19 320.019C3101.19 363.679 3130.05 384.52 3173.57 388.06L3317.43 400.24V400.42C3426.39 409.98 3497.85 459.64 3497.85 576.439C3497.85 693.239 3422.07 756.019 3314.79 756.019H2988.65V646.179H3302.59C3343.49 646.179 3369.73 618.26 3369.73 577.22C3369.73 533.721 3341.81 515.361 3299.97 511.961L3158.75 498.84C3036.67 487.42 2972.93 439.6 2972.93 323.58C2972.93 207.56 3051.33 144 3163.85 144H3478.39V253.84ZM2283.05 254.16H1982.85V416.301H2239.23V521.66H1982.71V756H1855.51V144.32H2283.05V254.16ZM1373.49 257.699V642.76H1448.19V642.92C1555.45 642.92 1639.11 580.92 1639.11 450.24C1639.11 319.56 1555.47 257.699 1448.19 257.699H1373.49Z"/></svg>';

  // key, label, hash. Guide links resolve against HOME; Lib links against DOCS.
  var GUIDE = [['home', 'Home', ''], ['brand', 'Brand', '#brand'], ['identity', 'Identity', '#identity'], ['assets', 'Assets', '#assets'], ['motion', 'Motion', '#motion']];
  var LIB = [['foundations', 'Foundations', '#foundations'], ['components', 'Components', '#components']];

  function links(base, arr) {
    return arr.map(function (i) {
      return '<a class="dsnav-link" data-k="' + i[0] + '" href="' + base + i[2] + '">' + i[1] + '</a>';
    }).join('');
  }

  var css = '' +
    '#topnav.dsnav{position:fixed;top:0;left:0;right:0;height:60px;z-index:1000;display:flex;align-items:center;gap:18px;padding:0 24px;box-sizing:border-box;font-family:"SuisseIntl","Suisse Intl",-apple-system,BlinkMacSystemFont,sans-serif;transition:background .3s}' +
    '#topnav.dsnav.scrolled{background:rgba(240,241,244,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid #E0E3F0}' +
    'html.dark #topnav.dsnav.scrolled{background:rgba(23,12,51,.9);border-bottom-color:rgba(255,255,255,.08)}' +
    '.dsnav-logo{display:inline-flex;align-items:center;gap:9px;padding:5px 11px;border-radius:10px;background:#fff;border:1px solid #E0E3F0;text-decoration:none;flex:none;transition:background .15s,border-color .15s}' +
    '.dsnav-logo:hover{background:#E8EAF0}' +
    '.dsnav-logo svg{height:20px;width:auto;fill:#363A5B}' +
    '.dsnav-logo-txt{font-size:12px;font-weight:500;letter-spacing:.02em;color:#363A5B;opacity:.6;padding-left:9px;border-left:1px solid #E0E3F0;white-space:nowrap}' +
    '.dsnav-links{display:flex;align-items:center;gap:2px;flex:1;justify-content:center;overflow-x:auto;scrollbar-width:none}' +
    '.dsnav-links::-webkit-scrollbar{display:none}' +
    '.dsnav-link{padding:8px 12px;border-radius:8px;font-size:13px;font-weight:500;color:#575C7B;text-decoration:none;white-space:nowrap;transition:all .2s}' +
    '.dsnav-link:hover{color:#1E202E;background:#E8EAF0}' +
    '.dsnav-link.active{color:#1E202E;background:#E8EAF0}' +
    '.dsnav-sep{width:1px;height:20px;background:#D7D8E1;margin:0 8px;flex:none}' +
    '.dsnav-theme{flex:none;height:32px;padding:0 14px;border:1px solid #E0E3F0;border-radius:8px;background:transparent;color:#575C7B;font-family:inherit;font-size:12px;font-weight:500;cursor:pointer}' +
    '.dsnav-theme:hover{background:#E8EAF0;color:#1E202E}' +
    /* dark */
    'html.dark .dsnav-logo{background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.08)}' +
    'html.dark .dsnav-logo:hover{background:rgba(255,255,255,.08)}' +
    'html.dark .dsnav-logo svg{fill:#E0E3F0}' +
    'html.dark .dsnav-logo-txt{color:#E0E3F0;border-left-color:rgba(255,255,255,.1)}' +
    'html.dark .dsnav-link{color:#AEB1C9}' +
    'html.dark .dsnav-link:hover,html.dark .dsnav-link.active{color:#E0E3F0;background:rgba(255,255,255,.08)}' +
    'html.dark .dsnav-sep{background:rgba(255,255,255,.12)}' +
    'html.dark .dsnav-theme{border-color:rgba(255,255,255,.1);color:#AEB1C9}' +
    'html.dark .dsnav-theme:hover{background:rgba(255,255,255,.08);color:#E0E3F0}' +
    '@media(max-width:760px){.dsnav-links{justify-content:flex-start}.dsnav-logo-txt{display:none}}';

  var html = '' +
    '<nav class="dsnav" id="topnav" aria-label="Design system">' +
    '<a class="dsnav-logo" href="' + HOME + '">' + LOGO + '<span class="dsnav-logo-txt">Design System</span></a>' +
    '<div class="dsnav-links">' + links(HOME, GUIDE) + '<span class="dsnav-sep"></span>' + links(DOCS, LIB) + '</div>' +
    '<button class="dsnav-theme" id="dsThemeBtn" aria-label="Toggle light/dark">Dark</button>' +
    '</nav>';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var mount = document.getElementById('dsnav');
  if (mount) { mount.insertAdjacentHTML('beforebegin', html); mount.remove(); }
  else document.body.insertAdjacentHTML('afterbegin', html);

  /* ---- theme (synced: .dark for token pages, data-theme for the monolith) ---- */
  function applyTheme(t) {
    if (t === 'dark') { document.documentElement.classList.add('dark'); document.documentElement.removeAttribute('data-theme'); }
    else { document.documentElement.classList.remove('dark'); document.documentElement.setAttribute('data-theme', 'light'); }
    var b = document.getElementById('dsThemeBtn'); if (b) b.textContent = (t === 'dark') ? 'Light' : 'Dark';
  }
  applyTheme(localStorage.getItem('theme') || 'light');
  document.getElementById('dsThemeBtn').addEventListener('click', function () {
    var t = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', t); applyTheme(t);
  });

  /* ---- active state from location ---- */
  function setActive() {
    var h = (location.hash || '').replace('#', '');
    var active = onDocs ? (h || 'foundations') : (h || 'home');
    var found = false;
    document.querySelectorAll('.dsnav-link').forEach(function (a) {
      var on = a.getAttribute('data-k') === active;
      if (on) found = true;
      a.classList.toggle('active', on);
    });
    return found;
  }
  setActive();
  window.addEventListener('hashchange', setActive);

  /* ---- scroll blur ---- */
  window.addEventListener('scroll', function () {
    var n = document.getElementById('topnav'); if (n) n.classList.toggle('scrolled', window.scrollY > 20);
  });
})();
