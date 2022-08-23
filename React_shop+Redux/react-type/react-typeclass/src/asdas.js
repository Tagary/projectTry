import React from 'react';

const asdas = () => {
  const [count, setCount] = React.useState(5);

  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickZero = () => {
    setCount(0);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickZero}>0</button>
    </div>
  );
};
