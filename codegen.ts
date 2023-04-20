
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.cartql.com/",
  watch:true,
  generates: {
    "generated/graphql": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
