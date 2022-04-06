import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { AppContextType } from "../../utils/words";

const Letter: React.FC<LetterProps> = ({ y, x }) => {
    const { board, setBoard, correctWord, currentAttempt, setDisabledLetters } = useContext(AppContext) as AppContextType
    const letter: string = board ? board[y][x] : ''
    const [ letterState, setLetterState ] = useState<string>('')

    

    useEffect(() => {
        if (correctWord && currentAttempt) {
            let correct: boolean = correctWord.toUpperCase()[x] === letter
            let almost: boolean = !correct && letter !== '' && correctWord.toUpperCase().includes(letter)
            setLetterState(currentAttempt.x > y ? (correct ? 'correct' : almost ? 'almost' : 'error') : '')
            
            if (letter !== '' && !correct && !almost) {
                setDisabledLetters((prev: Array<string>): Array<string> => [...prev, letter])
            }
        }
    }, [correctWord, currentAttempt, letter, setDisabledLetters, x, y])

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