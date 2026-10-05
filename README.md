# Maison CLM

Site vitrine Maison CLM construit avec React, TypeScript et Vite.
La page de liens a été actualisée le 5 octobre 2026.

## Pages

- `/` : site officiel Maison CLM.
- `/social` : page de liens pour la bio Instagram et TikTok.
- `/socials` : même page, conservée pour les liens existants.
- `/audit` : demande de mini-audit gratuit.
- `/mentions-legales` et `/confidentialite` : pages légales.

## Page de liens

Les quatre accès sont présentés sur deux colonnes, également sur mobile :

1. CLM SportLink → `https://sportlink.maisonclm.fr`.
2. Site officiel → `/`.
3. Mini-audit gratuit → `/audit` avec les paramètres de provenance.
4. Votre projet → `/#contact`.

Les liens Instagram, TikTok et LinkedIn se trouvent sous les cartes.
La citation de Clément est conservée en petit en dessous.
Le bouton de partage utilise le partage natif lorsqu’il est disponible,
ou copie l’adresse de la page.

Le contenu et les liens sont dans `src/pages/SocialsPage.tsx`.
Le style de cette page est dans `src/styles/socials.css`.

## Développement

```bash
npm ci
npm run dev
```

## Vérification et compilation

```bash
npm run lint
npm run build
```

Le dossier `dist/` inclus contient la version compilée, prête à héberger.
Le dossier `node_modules` n’est pas inclus.

## Mise en ligne

- **Vercel** : importer le dossier contenant `package.json`, framework Vite,
  commande `npm run build`, dossier de sortie `dist`.
- **Apache / hébergement statique** : transférer le contenu de `dist/`
  à la racine du site, en incluant le fichier `.htaccess`.
- **Netlify** : dossier de sortie `dist`, avec les réécritures `_redirects` incluses.

Les règles de réécriture permettent de charger directement `/social`,
`/socials` et `/audit`.
Après mise en ligne, le lien de bio peut être `https://maisonclm.fr/social`.

## Mini-audit

Le formulaire prépare un email vers `maison.clm.contact@gmail.com`.
Le visiteur vérifie et envoie lui-même le message depuis sa messagerie.
Le formulaire Google existant reste disponible en solution de secours.

## Aperçus

Le dossier `apercus/` contient des captures de la page sur téléphone et ordinateur.
