import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('true is true', () => {
  expect(true).toBe(true);
})

test('dynamically updates money', () => {
  render(<App />);
  const money = screen.getByTestId('money');
  const moneyButton = screen.getByTestId('money-button');
  fireEvent.click(moneyButton);
  expect(money).toHaveTextContent(200);
});

test('begins with 100 dollars', () => {
    render(<App />);
    const money = screen.getByTestId('money'); 
    const bobMoney = screen.getByTestId('bobs-money');
    expect(money).toHaveTextContent(100);
    expect(bobMoney).toHaveTextContent(0);
});

test('dynamically gets momey from mom', () => {
    render(<App />)
    const money = screen.getByTestId('bobs-money');
    const moneyButton = screen.getByTestId('ask-for-money');
    fireEvent.click(moneyButton);
    expect(money).toHaveTextContent(20);
  });