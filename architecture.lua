--[[ lua is only used here for aesthetic ]]

/root
├── backend
│   ├── database
│   │   └── database.sqlite
│   ├── node_modules
│   ├── src
│   │   ├── dataSource
│   │   │   ├── dataSource.ts
│   │   │   └── initTestData.ts
│   │   ├── entities
│   │   │   ├── Category.ts
│   │   │   └── Entity.ts
│   │   ├── resolvers
│   │   │   ├── CategoryResolvers.ts
│   │   │   └── EntityResolvers.ts
│   │   ├── graphql
│   │   │   ├── schema.ts
│   │   │   └── typeDefs.ts
│   │   ├── helpers
│   │   │   └── ...
│   │   └── index.ts
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── .next
│   ├── node_modules
│   ├── public
│   │   ├── images
│   │   │   └── ...
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   └── ...
│   │   ├── layouts
│   │   │   └── ...
│   │   ├── pages --[[ file based routing ]]
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── index.tsx
│   │   ├── styles
│   │   │   ├── page.module.scss
│   │   │   └── _variables.scss
│   │   └── ...
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── Dockerfile
│   ├── next-env.d.ts
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── architecture.lua
├── docker-compose.yml
└── README.md
