import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
// o mesmo que uma interface, mas como não subscrevemos nada do button, fica um type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
