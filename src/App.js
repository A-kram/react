import './index.scss';
import React from 'react';

function App() {
  const [count, SetCount] = React.useState(0);

  const onClickPlus = () => {
    SetCount(count + 1)
  }

  const onClickMinus = () => {
    SetCount(count - 1)
  }

  
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плс +</button>
      </div>
    </div>
  );
}

export default App;
