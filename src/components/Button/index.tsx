import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
// o mesmo que uma interface, mas como não subscrevemos nada do button, fica um type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'A Carregar ...' : children}
  </Container>
);

export default Button;
