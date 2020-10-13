import React from 'react';
import { withUrqlClient } from 'next-urql';
import { NavBar } from '../components/NavBar';
import { createUrqlClient } from '../utils/createUrqlClients';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>hello world</div>
      {!data ? null : data.posts.map(p => <div key={p.id}>{p.title}</div>)}
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
