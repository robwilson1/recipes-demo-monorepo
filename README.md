# Recipe 

This monorepo contains workspaces for building the same recipe sharing app with various JavaScript based front-end technologies with a focus on meta-frameworks. The purpose of the project is for education and to highlight the differences and similarities between using these technologies.

The project is wired up for TurboRepo and as such is limited to JavaScript/TypeScript workspaces.

## Frameworks & Libraries

- React
- SolidJS
- Svelte
- Vue
- HTMX

## Meta-Frameworks

- NextJS (app router)
- Remix
- SvelteKit
- SolidStart
- Nuxt

## API

The various front-end apps all communicate with a single shared back-end API which is powered by NodeJS and Fastify.
To persist data, this project uses Turso.