import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

// Todos os testes terao acesso ao mock e à função push
// Crio a funcao push fora para os testes terem acesso e verem se foi disparada
const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }), // quando aparecer o useHistory eu chamo uma funcao push, como no component
    Link: ({ children }: { children: React.ReactNode }) => children, // Tambem uso os Link que mostram o conteudo dos children (Ver Link em SignIn)
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('Email');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveBeenCalledWith('/dashboard');
  });
});
