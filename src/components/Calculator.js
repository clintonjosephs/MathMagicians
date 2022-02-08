import React from 'react';
import PropTypes from 'prop-types';
import Screen from './controls/Screen';
import Button from './controls/Button';
import calculate from '../logic/calculate';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
    };
  }

  performOperation = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.value));
  }

  render() {
    const { buttons } = this.props;
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <Screen total={total} operation={operation} next={next} />
        {
          buttons.map(({ text, className }) => (
            <Button
              text={text}
              className={className}
              handlerClick={this.performOperation}
              key={text}
            />
          ))
        }
      </div>
    );
  }
}

Calculator.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Calculator;
