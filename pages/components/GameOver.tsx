import React, { useContext } from "react";
import { AppContext } from "..";
import { AppContextType, GameOverType } from "../../utils/words";

const GameOver = () => {
    const { gameOver, setGameOver, correctWord, currentAttempt } = useContext(AppContext) as AppContextType

    return (
        <div className="gameOver">
            <h3>
                {gameOver && gameOver.guessedWord ? 'You guessed the word correctly': 'Sorry, you didn\'t guess the word'}
            </h3>
            <h1>Correct: {correctWord}</h1>
            {gameOver && gameOver?.guessedWord && (<h3>You guessed in {currentAttempt.x} attempts</h3>)}
        </div>
    )
}

export default GameOver