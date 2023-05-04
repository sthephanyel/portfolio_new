
import type { CodegenConfig } from '@graphql-codegen/cli';
// https://hygraph.com/
const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clgpm3c870lky01up9f5s2ozd/master",
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
