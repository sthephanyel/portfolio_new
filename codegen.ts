
import type { CodegenConfig } from '@graphql-codegen/cli';
// https://hygraph.com/
const config: CodegenConfig = {
  overwrite: true,
  schema: "",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      // preset: "client",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-urql'
      ],
      hooks: {
        afterAllFileWrite: 'eslint --fix'
      }
    }
  }
};

export default config;
