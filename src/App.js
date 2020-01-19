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


import React, { useState, useEffect, useRef } from 'react';

function App() {

  const STARTING_TIME = 5


  const [textarea, setTextarea] = useState('placeholder')
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setisTimeRunning] = useState(false)
  const inputRef = useRef(null)






  //console.log(textarea)

  function calculateWordCount(input) {
    const wordsArr = input.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  let antalOrd = '???'




  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000);
    }

    if (timeRemaining === 0) {
      setTimeRemaining(STARTING_TIME)

    }

    console.log('useffect')
    console.log(timeRemaining)

  }, [timeRemaining, isTimeRunning]);



  if (timeRemaining === 0 && isTimeRunning === true) {
    setisTimeRunning(false)
  }

  if (isTimeRunning === false) {
    antalOrd = calculateWordCount(textarea)
  }


  console.log('isTimeRunning', isTimeRunning)

  function handleButtonClick() {
    inputRef.current.disabled = false
    inputRef.current.focus()
    setTextarea('')
    setisTimeRunning(true)
  }




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
