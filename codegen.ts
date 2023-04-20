import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.cartql.com",
  documents: ["app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  watch: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
