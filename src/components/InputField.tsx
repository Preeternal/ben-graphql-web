/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';

import {
  FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/core';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  name: string;
}

export const InputField = (props: Props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input {...field} id={field.name} placeholder={props.placeholder} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
