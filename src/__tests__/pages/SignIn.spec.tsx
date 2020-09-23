import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// Todos os testes depois do mock ficam afetados por ele
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(), // quando aparecer o useHistory eu chamo uma funcao vazia
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
