import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// test('Verfica se há um botão.', () => {
//   render(<App />);
//   const button = screen.getByRole('button');

//   expect(button).toBeInTheDocument();
// });

test('Verfica se há dois botões.', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(2);
});

test('Verfica se há um botão de Enviar.', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');

  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});
