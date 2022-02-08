import Calculator from './components/Calculator';
import CalculatorKeys from './components/controls/CalculatorKeys';
import './App.css';

function App() {
  const buttons = CalculatorKeys();
  return (
    <div className="main">
      <Calculator buttons={buttons} />
    </div>
  );
}

export default App;
