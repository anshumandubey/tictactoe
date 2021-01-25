import './App.css';
import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState(['', '', '', '', '', '', '', '', '']);
  const [mark, setMark] = useState('O');
  const [winner, setWinner] = useState('');

  function changeValue(index) {
    values[index] = mark;
    setValues(values);
    if (checkWinner()) {
      setWinner(mark);
    } else {
      setMark(mark === 'O' ? 'X' : 'O');
    }
  }

  function checkWinner() {
    if ((values[0] === values[1] && values[0] === values[2] && values[0] !== '') || (values[0] === values[3] && values[0] === values[6] && values[0] !== '') || (values[6] === values[7] && values[6] === values[8] && values[6] !== '') ||
      (values[2] === values[5] && values[2] === values[8] && values[2] !== '') || (values[0] === values[4] && values[0] === values[8] && values[0] !== '') || (values[6] === values[4] && values[6] === values[2] && values[6] !== '') ||
      (values[4] === values[1] && values[4] === values[7] && values[4] !== '') || (values[3] === values[4] && values[3] === values[5] && values[3] !== '')) {
      return true;
    }
    return false;
  }

  function reset() {
    setValues(['', '', '', '', '', '', '', '', '']);
    setMark('O');
    setWinner('');
  }

  return (
    <div className={mark === 'O' ? 'round container' : mark === 'X' ? 'cross container' : 'container'}>
      <div className="board">
        {
          values.map((value, index) => {
            return <button className={value === 'O' ? 'round tile' : value === 'X' ? 'cross tile' : 'tile'} key={index} disabled={value !== ''} onClick={() => { changeValue(index) }}>{value}</button>
          })
        }
      </div>
      <div className={winner !== '' ? 'winnerBoard' : 'hidden'}>
        <h3>Winner is {mark}</h3>
        <button className="restart" onClick={reset}>Restart</button>
      </div>
    </div>
  );
}

export default App;
