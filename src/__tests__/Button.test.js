import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/controls/Button';

describe('Use Jest snapshots to test the button component.', () => {
    it('Button component renders properly', () => {
        const props = {
            text: "+",
            class: "orange",
        };

        const clickHandler = () => {}

        const component = renderer.create(
          <Button
            text={props.text}
            className={props.class}
            handlerClick={clickHandler}
          />
        );
        expect(component).toMatchSnapshot();
      });    
});

describe('Perform button click', () => {
    const props = {
        text: "+",
        class: "orange",
    };

    const clickHandler = jest.fn();

    render(<Button text={props.text}
            className={props.class}
            handlerClick={clickHandler} />);

    userEvent.click(screen.getByRole('button'));
    expect(clickHandler).toHaveBeenCalledTimes(1);
});
