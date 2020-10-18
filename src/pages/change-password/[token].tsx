/* eslint-disable react/prop-types */
import React from 'react';
import { NextPage } from 'next';
import { Button } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import { toErrorMap } from '../../utils/toErrorMap';
import { useChangePasswordMutation } from '../../generated/graphql';

export const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token,
          });
          if (response.data?.changePassword.errors) {
            setErrors(toErrorMap(response.data.changePassword.errors));
          } else if (response.data?.changePassword?.user) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="new password"
              label="New Password"
              type="password"
            />
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              change password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ChangePassword;
