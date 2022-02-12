import React, { useState } from 'react';
import Screen from './controls/Screen';
import Button from './controls/Button';
import calculate from '../logic/calculate';
import CalculatorKeys from './controls/CalculatorKeys';
import './Calculator.css';

const Calculator = () => {
  const [data, setData] = useState({ total: 0 });

  const performOperation = (event) => {
    setData(calculate(data, event.target.value));
  };

  const { total, operation, next } = data;

  const buttons = CalculatorKeys();

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

export default Calculator;
