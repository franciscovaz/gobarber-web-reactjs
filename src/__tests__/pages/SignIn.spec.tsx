import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// Todos os testes depois do mock ficam afetados por ele
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(), // quando aparecer o useHistory eu chamo uma funcao vazia
    Link: ({ children }: { children: React.ReactNode }) => children, // Tambem uso os Link que mostram o conteudo dos children (Ver Link em SignIn)
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
