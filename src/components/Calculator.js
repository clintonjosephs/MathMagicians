import React, { useState } from 'react';
import { BiWinkSmile } from 'react-icons/bi';
import Screen from './controls/Screen';
import Button from './controls/Button';
import calculate from '../logic/calculate';
import CalculatorKeys from './controls/CalculatorKeys';
import './Calculator.css';

const Calculator = () => {
  const [data, setData] = useState({ total: '0' });

  const { total, operation, next } = data;

  const performOperation = (event) => {
    setData(calculate(data, event.target.value));
  };

  const buttons = CalculatorKeys();

  return (
    <div className="calculator-wrapper">
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BiWinkSmile style={{ fontSize: '40px' }} />
        <h2>Try out our calculator!</h2>
      </div>
      <div className="calculator">
        <Screen
          total={total}
          operation={operation}
          next={next}
        />
        {buttons.map(({ text, className }) => (
          <Button
            text={text}
            className={className}
            handlerClick={performOperation}
            key={text}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
