# Maison CLM

Site vitrine Maison CLM construit avec React, TypeScript et Vite.

## Pages principales

- `/` : site vitrine
- `/socials` : hub de liens Maison CLM
- `/audit` : demande de mini-audit gratuit
- `/mentions-legales` et `/confidentialite` : pages légales

Le bouton d’audit prépare un email prérempli vers
`maison.clm.contact@gmail.com`. Le visiteur vérifie puis envoie lui-même le
message depuis sa messagerie. Le formulaire Google existant reste proposé en
solution de secours.

## Lancer le projet

```bash
npm install
npm run dev
```

## Construire la version de production

```bash
npm run build
```

Le résultat prêt à héberger est généré dans `dist/`.

## Mise en ligne des sous-pages

Le projet contient déjà les règles de réécriture nécessaires aux routes React :

- `vercel.json` pour Vercel ;
- `public/_redirects` pour Netlify et hébergeurs compatibles ;
- `public/.htaccess` pour un hébergement Apache.

Si le site est déployé sur Vercel, importez le dossier du projet et conservez
le framework Vite. Les adresses finales seront automatiquement
`https://www.maisonclm.fr/socials` et `https://www.maisonclm.fr/audit`.
