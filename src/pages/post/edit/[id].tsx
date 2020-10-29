import React from 'react';
import { withUrqlClient } from 'next-urql';
import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';

import { createUrqlClient } from '../../../utils/createUrqlClients';
import { InputField } from '../../../components/InputField';
import { Layout } from '../../../components/Layout';
import createPost from '../../create-post';

const EditPost = ({}) => {
  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={async values => {
          const { error } = await createPost({ input: values });
          // if (error?.message.includes('not authenticated')) {
          //   router.push('/login');
          // }
          if (!error) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              />
            </Box>

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(EditPost);
