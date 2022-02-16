import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../pages/Quotes';

describe('Use Jest snapshots to test the Quotes.', () => {
  it('Renders Quotes component', () => {
    const component = renderer.create(
      <Quotes />,
    ).toTree();
    expect(component).toMatchSnapshot();
  });
});
