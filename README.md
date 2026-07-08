# Site LIWEX INVEST

Site institutionnel statique (HTML5 + Tailwind CSS via CDN, JavaScript léger, sans build). Conforme au cahier des charges v1.0.

## Contenu du dossier

- `index.html` — Accueil
- `le-groupe/` — Le Groupe (vue d'ensemble)
- `le-groupe/liwex-invest/` — Page LIWEX INVEST
- `le-groupe/corner-immo/` — Page Corner Immo
- `le-groupe/corner-habitat/` — Page Corner Habitat
- `le-fondateur/` — Portrait du fondateur
- `contact/` — Formulaire de contact
- `mentions-legales/`, `politique-de-confidentialite/`, `cookies/` — Pages légales
- `assets/css/style.css` — Styles complémentaires (animations, header, placeholders)
- `assets/js/site.js` — Header/footer partagés, menu mobile, scroll, animations fade-in
- `sitemap.xml`, `robots.txt`, `favicon.svg`
- `IMAGES-A-FOURNIR.md` — Liste exacte des photos à déposer et à quel emplacement

## À faire avant mise en production

1. **Photos** : déposer les fichiers listés dans `IMAGES-A-FOURNIR.md` dans `assets/img/`.
2. **Formulaire de contact** (`contact/index.html`) : brancher l'attribut `action` du formulaire sur un service de traitement compatible hébergement statique — Netlify Forms, Formspree, ou une fonction serverless (Cloudflare Workers / Vercel Functions). Le gabarit ne stocke aucune donnée côté serveur par lui-même.
3. **Anti-spam** : intégrer Cloudflare Turnstile ou hCaptcha dans la `<div id="captcha-widget">` du formulaire de contact.
4. **Nom de domaine** : les URLs canoniques et le sitemap présument `https://www.liwexinvest.fr` — à ajuster si le domaine final diffère.
5. **Hébergement** : le dossier est prêt à être déployé tel quel sur Vercel, Netlify, Cloudflare Pages ou GitHub Pages (aucune étape de build requise).

## Notes techniques

- Tailwind est chargé via le CDN "Play" (`cdn.tailwindcss.com`) pour éviter toute étape de build. Pour une mise en production optimisée (purge CSS, meilleure performance Lighthouse), il est recommandé de migrer vers une compilation Tailwind classique (CLI ou intégration Astro) une fois le contenu validé.
- Palette : blanc / noir / anthracite / gris pierre, accent bronze (`#a9784c`). Facilement remplaçable par le vert profond mentionné en alternative dans le cahier des charges, via les variables de couleur dans `tailwind.config` (dupliqué en tête de chaque page) et `assets/css/style.css`.
- Typographies : Fraunces (titres) + Inter (texte courant), chargées depuis Google Fonts.
- Accessibilité : lien d'évitement, focus visible, contrastes AA, structure sémantique (header/main/footer, hiérarchie de titres).
