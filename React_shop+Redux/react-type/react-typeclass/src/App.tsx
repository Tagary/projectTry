import React from 'react';
import Counter from './Counter';

function App() {
  React.useEffect(() => {
    return () => {
      console.log('компонент удалился');
    };
  }, []);
  return (
    <div className="App">
      <Counter title="Counter: " />
    </div>
  );
}

export default App;
