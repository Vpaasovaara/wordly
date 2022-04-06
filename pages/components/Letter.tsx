import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { AppContextType } from "../../utils/words";

const Letter: React.FC<LetterProps> = ({ y, x }) => {
    const { board, setBoard, correctWord, currentAttempt, setDisabledLetters } = useContext(AppContext) as AppContextType
    const letter: string = board ? board[y][x] : ''
    //const [ letterState, setLetterState ] = useState<string>('')

    let dependency: number = currentAttempt ? currentAttempt.x : 0
    let correct: boolean = correctWord ? (correctWord.toUpperCase()[x] === letter) : false
    let almost: boolean = correctWord ? (!correct && letter !== '' && correctWord.toUpperCase().includes(letter)) : false
    let letterState:string = currentAttempt ? (currentAttempt.x > y ? (correct ? 'correct' : almost ? 'almost' : 'error') : '') : ''

    useEffect(() => {
        if (letter !== '' && !correct && !almost) {
           setDisabledLetters((prev: Array<string>): Array<string> => [...prev, letter])
        }
    }, [dependency])

    return (
        <div className="letter" id={letterState}>
            {letter}
        </div>
    )
}

export default Letter

type LetterProps = {
    x: number;
    y: number;
}