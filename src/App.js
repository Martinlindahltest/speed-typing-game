/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */


import React, { useState } from 'react';

function App() {

  const [textarea, setTextarea] = useState('placeholder')

  //console.log(textarea)

  let antalOrdITextarea = textarea.split(' ').length;


  return (
    <div className="App">
      <h1>Titel</h1>
      <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
      <h4>tid kvar:</h4>
      <button onClick={() => console.log(antalOrdITextarea)}>Start:</button>
      <h1>Hur många ord:</h1>
    </div>
  );
}

export default App;
