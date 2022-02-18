import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Use Jest snapshots to test the components.', () => {
  it('Renders calculator buttons', () => {
    const component = renderer.create(<Calculator />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Perform calculation operations', () => {
  test('Press to see response', () => {
    render(<Calculator />);
    const result = screen.getByTestId('screen');
    userEvent.click(screen.getByText('1'));
    expect(result.innerHTML).toBe('1');
  });

  test('Press two numbers to see response', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('2'));
    const result = screen.getByTestId('screen');
    expect(result.innerHTML).toBe('12');
  });

  test('press equal sign to test calculation', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('='));
    const result = screen.getByTestId('screen');
    expect(result.innerHTML).toBe('20');
  });

  test('use calculator in modulus', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('%'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    const result = screen.getByTestId('screen');
    expect(result.innerHTML).toBe('1');
  });

  test('use calculator in multiplication', () => {
    render(<Calculator />);
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('x'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    const result = screen.getByTestId('screen');
    expect(result.innerHTML).toBe('60');
  });
});
