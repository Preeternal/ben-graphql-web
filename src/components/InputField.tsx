/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';

import {
  FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/core';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
}

export const InputField = ({ label, size: _, ...props }: Props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};