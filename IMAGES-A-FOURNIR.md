# Images à fournir

Chaque zone du site affiche actuellement un bandeau de remplacement (dégradé anthracite/bronze) indiquant le chemin exact du fichier attendu. Il suffit de déposer les photos définitives dans `assets/img/` avec **exactement ces noms** pour qu'elles s'affichent automatiquement, sans toucher au code.

| Fichier attendu | Page | Usage | Dimensions conseillées |
|---|---|---|---|
| `assets/img/hero-accueil.jpg` | Accueil | Hero plein écran | 2400×1500 |
| `assets/img/groupe-liwex-invest.jpg` | Accueil / Le Groupe | Vignette carte | 1200×900 |
| `assets/img/groupe-corner-immo.jpg` | Accueil / Le Groupe | Vignette carte | 1200×900 |
| `assets/img/groupe-corner-habitat.jpg` | Accueil / Le Groupe | Vignette carte | 1200×900 |
| `assets/img/hero-le-groupe.jpg` | Le Groupe | Bandeau | 2400×1200 |
| `assets/img/hero-liwex-invest.jpg` | LIWEX INVEST | Bandeau | 2400×1200 |
| `assets/img/hero-corner-immo.jpg` | Corner Immo | Bandeau | 2400×1200 |
| `assets/img/hero-corner-habitat.jpg` | Corner Habitat | Bandeau | 2400×1200 |
| `assets/img/hero-fondateur.jpg` | Le Fondateur | Portrait professionnel | 2400×1400 |
| `assets/img/og-cover.jpg` | Toutes (partage réseaux sociaux) | Image Open Graph | 1200×630 |

Recommandations photo (cf. direction artistique) : architecture contemporaine, paysages alpins, matériaux nobles, lumière naturelle, photographies authentiques — pas de banque d'images générique.

## Comment remplacer un placeholder

Dans chaque fichier HTML, le bloc suivant :

```html
<div class="hero-media absolute inset-0 img-placeholder">
  <span>...chemin du fichier...</span>
</div>
```

doit être remplacé par :

```html
<div class="hero-media absolute inset-0">
  <img src="/assets/img/hero-accueil.jpg" alt="Description factuelle de la photo" class="w-full h-full object-cover" />
</div>
```

Penser à renseigner un texte alternatif (`alt`) descriptif sur chaque image, conformément aux exigences d'accessibilité du cahier des charges (section 21).
