import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const Arr = [1, 2, 3];
  const [count, setCount] = React.useState(0);

  const handleOnClickplus = () => {
    setCount(count + 1);
  };
  const handleOnClickRemove = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>{count}</div>
      {console.log(Arr.forEach((item) => item))}
      <button onClick={handleOnClickplus}>+</button>
      <button onClick={handleOnClickRemove}>Remove</button>
    </div>
  );
}

export default App;
