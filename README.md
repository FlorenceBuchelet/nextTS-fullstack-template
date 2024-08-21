# Template's stack

- Next
- NodeJS
- GraphQL
- Apollo
- TypeORM
- SQLite
- Typescript

## Prerequisites

- Docker & Docker compose

## Run

`docker compose up`

After first run, comment functions `cleanDB` and `initTestData` in `backend/src/index.ts` to avoid doubles in data and bad ID incrementation.

### Next.js

This [Next.js](https://nextjs.org/) project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### SQLite

SQLite is an integrated simple database.

**Note**: to navigate your SQLite database, you might want to use an IDE extension and therefore might need to install SQLite3 globally (`sudo apt install sqlite3` on Linux, via Homebrew on Mac and via the official `.exe` for Windows)


## To do list

Le plan, c'est d'avoir un template que je vais pouvoir utiliser pour le tracker mais aussi pour le projet.
La stack complète.
*si j'utilise telle chose, j'ai besoin de ça.*
- Next: 
- NodeJS: 
- GraphQL: Apollo, CodeGen.
- Apollo: 
- TypeORM: 
- SQLite: 
- Typescript: un tsconfig, une organisation pour les interfaces


TODO:
- enlever le cleanDB pour remplacer par un volume