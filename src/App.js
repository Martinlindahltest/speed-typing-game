import React from 'react';

import MartinsHook from './Hooks/martinsHook';

function App() {

  const { inputRef, textarea, isTimeRunning, setTextarea, timeRemaining, handleButtonClick, antalOrd } = MartinsHook()




  return (
    <div className="App">
      <h1>Titel</h1>
      <textarea ref={inputRef} value={textarea} disabled={!isTimeRunning} onChange={(e) => setTextarea(e.target.value)} />
      <h4>tid kvar: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={() => handleButtonClick()}>Start:</button>
      <h1>Hur många ord: {antalOrd}</h1>
    </div>
  );
}

export default App;
