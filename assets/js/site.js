/* Corner Group — header/footer partagés + comportements (scroll, menu, animations) */

const HEADER_HTML = `
<div class="max-w-7xl mx-auto px-6 lg:px-10">
  <div class="flex items-center justify-between h-20 lg:h-24">
    <a href="/" class="logo-link flex items-center h-9 lg:h-11">
      <img src="/assets/img/Cornergroup-light.svg" alt="Corner Group" class="logo-img logo-light h-full w-auto" />
      <img src="/assets/img/Cornergroup-dark.svg" alt="Corner Group" class="logo-img logo-dark h-full w-auto" />
    </a>

    <nav class="hidden lg:flex items-center gap-10" aria-label="Navigation principale">
      <a href="/" class="nav-link text-sm tracking-wide">Accueil</a>

      <div class="dropdown relative">
        <button class="nav-link text-sm tracking-wide flex items-center gap-1" aria-haspopup="true" aria-expanded="false" id="dropdown-toggle">
          Le Groupe
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="dropdown-panel absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-2xl border border-stone-100 py-3 rounded-2xl overflow-hidden">
          <a href="/le-groupe/" class="block px-6 py-2.5 text-sm text-anthracite hover:text-bronze hover:bg-stone-50 transition-colors">Corner Group</a>
          <a href="/le-groupe/corner-immo/" class="block px-6 py-2.5 text-sm text-anthracite hover:text-bronze hover:bg-stone-50 transition-colors">Corner Immo</a>
          <a href="/le-groupe/corner-habitat/" class="block px-6 py-2.5 text-sm text-anthracite hover:text-bronze hover:bg-stone-50 transition-colors">Corner Habitat</a>
        </div>
      </div>

      <a href="/le-fondateur/" class="nav-link text-sm tracking-wide">Le fondateur</a>
    </nav>

    <button id="mobile-menu-toggle" class="lg:hidden logo-text p-2 -mr-2" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-menu">
      <svg id="icon-burger" width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1H26" stroke="currentColor" stroke-width="1.6"/><path d="M0 9H26" stroke="currentColor" stroke-width="1.6"/><path d="M0 17H26" stroke="currentColor" stroke-width="1.6"/></svg>
    </button>
  </div>
</div>
`;

const MOBILE_MENU_HTML = `
<div id="mobile-menu" class="lg:hidden fixed inset-0 top-0 bg-white z-[60] flex flex-col">
  <div class="max-w-7xl w-full mx-auto px-6 flex items-center justify-between h-20">
    <span class="font-display text-xl text-anthracite">Corner <span class="font-normal">Group</span></span>
    <button id="mobile-menu-close" class="p-2 -mr-2 text-anthracite" aria-label="Fermer le menu">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L21 21" stroke="currentColor" stroke-width="1.6"/><path d="M21 1L1 21" stroke="currentColor" stroke-width="1.6"/></svg>
    </button>
  </div>
  <nav class="flex-1 flex flex-col justify-center px-8 gap-7" aria-label="Navigation mobile">
    <a href="/" class="font-display text-3xl text-anthracite">Accueil</a>
    <div>
      <p class="font-display text-3xl text-anthracite mb-3">Le Groupe</p>
      <div class="flex flex-col gap-3 pl-4 border-l border-stone-200">
        <a href="/le-groupe/" class="text-base text-stone-600">Corner Group</a>
        <a href="/le-groupe/corner-immo/" class="text-base text-stone-600">Corner Immo</a>
        <a href="/le-groupe/corner-habitat/" class="text-base text-stone-600">Corner Habitat</a>
      </div>
    </div>
    <a href="/le-fondateur/" class="font-display text-3xl text-anthracite">Le fondateur</a>
  </nav>
</div>
`;

const FOOTER_HTML = `
<div class="max-w-7xl mx-auto px-6 lg:px-10 py-20">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
    <div class="md:col-span-1">
      <img src="/assets/img/Cornergroup-light.svg" alt="Corner Group" class="footer-logo-img h-6 w-auto mb-5" />
      <p class="text-sm text-white/50 leading-relaxed">Un groupe immobilier intégré, de l'investissement à la création de valeur.</p>
    </div>
    <div>
      <p class="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Navigation</p>
      <ul class="space-y-3 text-sm text-white/70">
        <li><a href="/" class="hover:text-bronze transition-colors">Accueil</a></li>
        <li><a href="/le-groupe/" class="hover:text-bronze transition-colors">Le Groupe</a></li>
        <li><a href="/le-fondateur/" class="hover:text-bronze transition-colors">Le fondateur</a></li>
        <li><a href="/contact/" class="hover:text-bronze transition-colors">Contact</a></li>
      </ul>
    </div>
    <div>
      <p class="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Les sociétés</p>
      <ul class="space-y-3 text-sm text-white/70">
        <li><a href="/le-groupe/" class="hover:text-bronze transition-colors">Corner Group</a></li>
        <li><a href="/le-groupe/corner-immo/" class="hover:text-bronze transition-colors">Corner Immo</a></li>
        <li><a href="/le-groupe/corner-habitat/" class="hover:text-bronze transition-colors">Corner Habitat</a></li>
      </ul>
      <p class="text-xs tracking-[0.15em] uppercase text-white/40 mb-5 mt-8">Sites du groupe</p>
      <ul class="space-y-3 text-sm text-white/70">
        <li><a href="https://cornergroup.com" target="_blank" rel="noopener" class="hover:text-bronze transition-colors">cornergroup.com <span aria-hidden="true">↗</span></a></li>
        <li><a href="https://cornerimmo.fr" target="_blank" rel="noopener" class="hover:text-bronze transition-colors">cornerimmo.fr <span aria-hidden="true">↗</span></a></li>
        <li><a href="https://cornerhabitat.fr" target="_blank" rel="noopener" class="hover:text-bronze transition-colors">cornerhabitat.fr <span aria-hidden="true">↗</span></a></li>
      </ul>
    </div>
    <div>
      <p class="text-xs tracking-[0.15em] uppercase text-white/40 mb-5">Contact</p>
      <a href="mailto:wilfried@cornerimmo.fr" class="text-sm text-white/70 hover:text-bronze transition-colors">wilfried@cornerimmo.fr</a>
    </div>
  </div>

  <div class="pt-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
    <p class="text-xs text-white/40 leading-relaxed max-w-2xl">
      LIWEX INVEST — SASU au capital de 1&nbsp;000&nbsp;€ — SIREN&nbsp;891&nbsp;315&nbsp;624 — SIRET&nbsp;891&nbsp;315&nbsp;624&nbsp;00017 — RCS Chambéry 891&nbsp;315&nbsp;624 — TVA intracommunautaire FR70&nbsp;891315624<br class="hidden lg:block" />
      Siège social&nbsp;: 1357 Route de Bellecombette, 73000 Jacob-Bellecombette — Président&nbsp;: Wilfried Exertier
    </p>
    <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
      <a href="/mentions-legales/" class="hover:text-bronze transition-colors">Mentions légales</a>
      <a href="/politique-de-confidentialite/" class="hover:text-bronze transition-colors">Politique de confidentialité</a>
      <a href="/cookies/" class="hover:text-bronze transition-colors">Cookies</a>
    </div>
  </div>
  <p class="text-xs text-white/30 mt-8">© ${new Date().getFullYear()} Corner Group. Tous droits réservés.</p>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) {
    headerMount.innerHTML = HEADER_HTML;
    document.body.insertAdjacentHTML("beforeend", MOBILE_MENU_HTML);
  }
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;

  // Header solid on scroll
  const header = document.getElementById("site-header");
  const isForcedSolid = document.body.dataset.headerMode === "solid";
  const onScroll = () => {
    if (isForcedSolid) return;
    if (window.scrollY > 40) {
      header.classList.add("header-solid");
    } else {
      header.classList.remove("header-solid");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const toggle = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");
  const openMenu = () => {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  if (toggle) toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // Dropdown (mobile tap support, desktop is hover via CSS)
  const dropdownToggle = document.getElementById("dropdown-toggle");
  dropdownToggle?.addEventListener("click", (e) => {
    const panel = dropdownToggle.closest(".dropdown");
    const expanded = panel.classList.toggle("dropdown-open");
    dropdownToggle.setAttribute("aria-expanded", String(expanded));
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

  // Léger parallax sur le hero
  const heroMedia = document.querySelector(".hero-media");
  if (heroMedia) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        heroMedia.style.transform = `translateY(${y * 0.15}px)`;
      },
      { passive: true }
    );
  }
});
