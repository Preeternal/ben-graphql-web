import { dedupExchange, cacheExchange, fetchExchange } from '@urql/core';

export const createUrqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:3000/graphql',
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});
