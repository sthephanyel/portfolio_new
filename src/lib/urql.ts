import {createClient, dedupExchange, ssrExchange, fetchExchange, cacheExchange, } from 'urql';
// yarn add @graphql-codegen/cli @graphql-codegen/import-types-preset @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql -D
const isServerSide = typeof window == 'undefined';
const ssrCache = ssrExchange({isClient : !isServerSide});

const client = createClient({
    url: ``,
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})


export {client, ssrCache};
