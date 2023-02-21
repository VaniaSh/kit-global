import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, onClick }: any) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
