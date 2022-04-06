import type { NextPage } from 'next';
import React, { createContext, useEffect, useState } from 'react';
import Keyboard from './components/Keyboard';
import Table from './components/Table';
import GameOver from './components/GameOver';
import { Board, defaultBoard, AttemptType, AppContextType, generateWordSet, GameOverType, randomWord } from "../utils/words";


export const AppContext = createContext<AppContextType | Board>(defaultBoard)

const Home: NextPage = () => {
  const [ board, setBoard ] = useState<Board>(defaultBoard);
  const [ currentAttempt, setCurrentAttempt ] = useState<AttemptType>({x: 0, y: 0 })
  const [ correctWord, setCorrectWord ] = useState<string>('')
  const [ wordset, setWordset ] = useState<Set<string> | null>(null)
  const [ disabledLetters, setDisabledLetters ] = useState([] as Array<any>)
  const [ gameOver, setGameOver ] = useState<GameOverType>({ gameOver: false, guessedWord: false })

  useEffect(() => {
    setWordset(generateWordSet())
    setCorrectWord(randomWord())
  }, [])

  const onSelectLetter = (key: string) => {
    if (currentAttempt.y > 4) return
    const newBoard: Board = [...board]
    newBoard[currentAttempt.x][currentAttempt.y] = key
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, y: currentAttempt.y + 1 })
  }

  const onDelete = () => {
    if (currentAttempt.y === 0) return
    const newBoard: Board = [...board]
    newBoard[currentAttempt.x][currentAttempt.y - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, y: currentAttempt.y - 1 })
  }

  const onEnter = () => {
    if (currentAttempt.y < 5) return

    let currWord: string = ''
    for (let i: number = 0;i < 5; i++) {
      currWord += board[currentAttempt.x][i]
    }

    if (wordset?.has(currWord.toLowerCase())) {
      setCurrentAttempt({ x: currentAttempt.x + 1, y: 0 })
    } else {
      alert('Word Not Found')
    }

    if (currWord === correctWord) {
      alert('Game Ended')
      setGameOver({ gameOver: true, guessedWord: true })
      return
    }

    if (currentAttempt.x === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
    }
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter, correctWord, disabledLetters, setDisabledLetters, setGameOver, gameOver }}>
      <div className='game'>
        <Table />
        {gameOver.gameOver ? <GameOver /> :<Keyboard />}
      </div>
      </AppContext.Provider>
    </div>
  )
}

export default Home




