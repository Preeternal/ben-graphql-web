import React from 'react';
import { Box } from '@chakra-ui/core';

type Props = {
  children: React.ReactNode
  variant?: 'small' | 'regular'
}

export const Wrapper = ({ children, variant = 'regular' }: Props) => (
  <Box mt={8} mx="auto" maxW={variant === 'regular' ? '800px' : '400px'} w="100%">
    <>{children}</>
  </Box>
);
