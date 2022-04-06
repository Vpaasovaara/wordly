import { WORDS } from "./wordList";

export const defaultBoard: Board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

export const defaultKeys: Board = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L',],
    ['Z','X','C','V','B','N','M']
]

export type GameOverType = {
  gameOver: boolean;
  guessedWord: boolean;
}

export type Board = Array<Array<string>>;

export interface AttemptType {
    x: number;
    y: number;
}

export type AppContextType = {
    board: Board;
    setBoard: (arg: Board) => void;
    currentAttempt: AttemptType;
    setCurrentAttempt: (arg: AttemptType) => void;
    onSelectLetter: (arg: string) => void;
    onDelete: () => void;
    onEnter: () => void;
    correctWord: string;
    disabledLetters: Array<any>;
    setDisabledLetters: (arg: any) => void;
    setGameOver: (arg: GameOverType) => void;
    gameOver: GameOverType;
}

export const generateWordSet = () => {
    let wordSet: Set<string>
    wordSet = new Set(WORDS)
    return wordSet
}

export const randomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}


/*

await fetch(wordBank, { mode: 'no-cors' })
        .then((result) => result.text())
        .then((response) => {
            console.log(response)
            const wordArr: Array<string> = response.split('\n')
            wordSet = new Set(wordArr)
        })

*/