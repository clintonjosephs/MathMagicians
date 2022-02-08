import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Screen from './controls/Screen';
import Button from './controls/Button';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = (props) => {
  const [data, setData] = useState({ total: 0 });

  const performOperation = (event) => {
    setData(calculate(data, event.target.value));
  };

  const { buttons } = props;
  const { total, operation, next } = data;
  return (
    <div className="calculator">
      <Screen total={total} operation={operation} next={next} />
      {buttons.map(({ text, className }) => (
        <Button
          text={text}
          className={className}
          handlerClick={performOperation}
          key={text}
        />
      ))}
    </div>
  );
};

Calculator.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Calculator;
