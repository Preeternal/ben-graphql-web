import React from 'react';
import { withUrqlClient } from 'next-urql';
import { Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import { createUrqlClient } from '../utils/createUrqlClients';
import { usePostsQuery } from '../generated/graphql';
import { Layout } from '../components/Layout';

const Index = () => {
  const [{ data }] = usePostsQuery({
    variables: {
      limit: 15,
      // cursor: null,
    },
  });
  return (
    <Layout>
      <NextLink href="/create-post">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>create post</Link>
      </NextLink>

      <br />
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map(p => <div key={p.id}>{p.title}</div>)
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
