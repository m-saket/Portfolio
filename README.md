# Saket Mehla — Portfolio

Personal portfolio built with React, TypeScript, Vite and CSS. Production: https://saket-mehla.vercel.app/

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
npx tsc -b
npm run lint
```

Project content and destination links live in `src/data.ts`. Page sections live in `src/App.tsx`; responsive styles are in `src/index.css`. Campus resumes are served directly from `public/resumes` to avoid third-party download dependencies.

The portrait in `public/images` is an AI-assisted editorial portrait made from Saket's supplied reference photos. Project artwork is illustrative, not a screenshot of a deployed application. Case-study copy distinguishes measured outcomes, team contributions and modelled projections.

The existing Vercel project can continue deploying this repository; its domain does not need to change.
