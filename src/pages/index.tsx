import React from 'react';
import { withUrqlClient } from 'next-urql';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/core';
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
        <Stack spacing={8}>
          {data.posts.map(p => (
            <Box key={p.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
