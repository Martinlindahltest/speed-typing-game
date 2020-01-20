import { useState, useEffect, useRef } from "react"


export default function MartinsHook() {

    const STARTING_TIME = 5


    const [textarea, setTextarea] = useState('placeholder')
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setisTimeRunning] = useState(false)
    const inputRef = useRef(null)

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

    }, [timeRemaining, isTimeRunning]);

    if (timeRemaining === 0 && isTimeRunning === true) {
        setisTimeRunning(false)
    }

    if (isTimeRunning === false) {
        antalOrd = calculateWordCount(textarea)
    }

    function handleButtonClick() {
        inputRef.current.disabled = false
        inputRef.current.focus()
        setTextarea('')
        setisTimeRunning(true)
    }

    return { inputRef, textarea, isTimeRunning, setTextarea, timeRemaining, handleButtonClick, antalOrd }

}


