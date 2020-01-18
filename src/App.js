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


import React, { useState, useEffect } from 'react';

function App() {

  const [textarea, setTextarea] = useState('placeholder')
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [gamestarted, setGameStarted] = useState(false)



  //console.log(textarea)

  function calculateWordCount(input) {
    const wordsArr = input.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }




  useEffect(() => {
    if (timeRemaining > 0 && gamestarted) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000);
    }

    console.log('useffect')
    console.log(timeRemaining)

  }, [timeRemaining, gamestarted]);





  return (
    <div className="App">
      <h1>Titel</h1>
      <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} />
      <h4>tid kvar: {timeRemaining}</h4>
      <button onClick={() => setGameStarted(true)}>Start:</button>
      <h1>Hur många ord: {calculateWordCount(textarea)}</h1>
    </div>
  );
}

export default App;
