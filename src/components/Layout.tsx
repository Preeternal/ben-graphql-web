import React from 'react';
import { NavBar } from './NavBar';
import { Wrapper, WrapperVariant } from './Wrapper';

type Props = {
  children: React.ReactNode;
  variant?: WrapperVariant;
};

export const Layout = ({ children, variant }: Props) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
