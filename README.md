# Cosmic-

Next.js app scaffolded in Firebase Studio, prepared for smooth Vercel deployment.

## Local development

```bash
npm ci
npm run dev
```

## Deploying to Vercel

1. Import this repository in Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Use Node.js **20.x** (project includes `.nvmrc`).
4. Build command is `npm run build` and install command is `npm ci` (also set in `vercel.json`).
5. Add any required environment variables in Vercel Project Settings before your first production deployment.

## Production checks before deploy

```bash
npm run build
```

If the build succeeds locally, Vercel should build this app without extra platform changes.
