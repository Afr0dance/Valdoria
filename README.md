# Fennland Forum 2024 - Classified Delegation Dossiers

Password-protected delegation dossiers for the Fennland Forum emergency special session.

## Dossiers

- **China (PRC)** - Password: `RedLine2024`
- **USA** - Password: `Minerals4200`
- **Valdoria** - Password: `OptionB2024`

## Deployment

Deployed on Vercel with the following endpoints:

- Main hub: `https://fennland-docs.vercel.app/`
- China dossier: `https://fennland-docs.vercel.app/china`
- USA dossier: `https://fennland-docs.vercel.app/usa`
- Valdoria dossier: `https://fennland-docs.vercel.app/valdoria`

## Authentication

Sessions are validated via HTTP-only cookies with 24-hour expiration. Each dossier requires the correct password for access.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
