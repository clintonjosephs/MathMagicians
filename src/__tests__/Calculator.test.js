import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Use Jest snapshots to test the components.', () => {
  it('Renders calculator buttons', () => {
    const component = renderer.create(<Calculator />);
    expect(component).toMatchSnapshot();
  });
});

describe('Perform calculation operations', () => {
  test('Press to see response', () => {
    render(<Calculator />);
    const result = screen.getByRole('show-display');
    fireEvent.click(screen.getByText('1'));
    expect(result.innerHTML).toBe('1');
  });

  test('Press two numbers to see response', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    const result = screen.getByRole('show-display');
    expect(result.innerHTML).toBe('12');
  });

  test('press equal sign to test calculation', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByRole('show-display');
    expect(result.innerHTML).toBe('20');
  });
});
