import { Box } from '@chakra-ui/core';
import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <Box mt={8} mx="auto" maxW="800px" w="100%">
      {children}
    </Box>

  );
}