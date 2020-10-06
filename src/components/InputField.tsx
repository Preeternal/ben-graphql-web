import React from 'react';
import { useField } from 'formik';

import {
  FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/core';

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const InputField = ({}: Props) => {
  const [] = useField();
  return (
    <FormControl isInvalid={form.errors.name && form.touched.name}>
      <FormLabel htmlFor="name">First name</FormLabel>
      <Input {...field} id="name" placeholder="name" />
      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    </FormControl>
  );
};
