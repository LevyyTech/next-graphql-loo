# Next.js & GraphQL Loo explorer

Test assessment showcasing a Next.js application with a public GraphQL API integration and a basic authentication with Auth0.

You can find deployed version at: https://next-graphql-loo-three.vercel.app

## Screencast

https://github.com/LevyyTech/next-graphql-loo/assets/128682730/0f4df020-53a2-440f-a4bd-48044af4f06d

## Get Started

1. Install dependencies: `npm install`.
2. Create `.env` file in the root of the project.
3. Copy environment variables from `.env.example` file
4. Fill in `.env` file with your own Auth0 values in order for the authentication to work
5. Run `npm run dev` and visit <https://localhost:3000>.

## Useful scripts

- `npm run lint:js` - checks for ESLint and Prettier errors
- `npm run lint:types` - checks for TypeScript errors
- `npm run prettier` - applies Prettier formatting to all files in the project

CI/CD pipeline automatically runs linter checks on push and pull request.
