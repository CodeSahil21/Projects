import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: ["**/*.{graphql,tsx,ts}", "!node_modules/**"],
  generates: {
    "gql/": { 
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  ignoreNoDocuments: true, 
  hooks: {
    afterAllFileWrite: ["prettier --write"]
  },
  config: {
    skipDocumentsValidation: true,
    exclude: ["node_modules/**"]
  }
};

export default config;