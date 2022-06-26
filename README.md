# REACT-STARTER-WCS

bootstrapper CLI for React App with optional basic conf for Caprover deployment.
The repo came with everything you will need to start:

- ESLint config with Prettier
- React-query
- Tailwindcss
- Typescript
- Github Action on PR that runs ESLint and build

It uses [ViteJS](https://vitejs.dev/) ⚡️

## Getting started :pushpin:

You can install it globally OR use npx instead

```bash
npx react-starter-wcs my-fresh-app

cd my-fresh-app

yarn dev

```

## Caprover :pushpin:

You can add pre-made config files if you use Caprover as your deployment solution.
Those are a Nginx config file, a Dockerfile and a `captain-definition` (needed for every Caprover app).
