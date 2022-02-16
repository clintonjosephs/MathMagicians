import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Use Jest snapshots to test the navbar.', () => {
  it('Renders NavBar component', () => {
    const component = renderer.create(
      <Router>
        <NavBar />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Test user operation on NavLink', () => {
  it('Checks how links toggle active on user click', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(screen.getByRole('list').childElementCount).toBe(3);

    userEvent.click(screen.getByText(/quotes/i));

    expect(screen.getByText('Quotes').closest('a')).toHaveAttribute(
      'class',
      'link active'
    );

    userEvent.click(screen.getByText(/home/i));

    expect(screen.getByText('Quotes').closest('a')).not.toHaveAttribute(
      'class',
      'link active'
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute(
      'class',
      'link active'
    );
  });
});
