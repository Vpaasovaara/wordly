import React, { useCallback, useContext, useEffect } from "react";
import { defaultKeys } from "../../utils/words";
import Key from "./Key";
import { AppContext } from "..";
import { AppContextType } from "../../utils/words";


const Keyboard = () => {
    const { onEnter, onDelete, onSelectLetter, disabledLetters } = useContext(AppContext) as AppContextType

    const handleKeyboard = useCallback((event: any) => {
        console.log(event.key)
        if (event.key === 'Enter') {
            onEnter()
        } else if (event.key === 'Backspace') {
            onDelete()
        } else {
            defaultKeys.forEach((keyArray: Array<string>) => {
                keyArray.forEach((key: string) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key)
                    }
                })
            })
        }
    }, [onEnter, onDelete, onSelectLetter])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)

        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            {disabledLetters && defaultKeys.map((keyArray: Array<string>, i: number) => {
                return (
                    <div key={i} className={`line${i+1}`}>
                        
                        {keyArray.map((key: string, y: number) => {
                            return (
                                <Key key={`${i}${y}`} keyVal={key} bigKey={false} disabled={disabledLetters.includes(key)}/>
                            )
                        })}
                        
                    </div>
                )
            })}
            <div className="line3">
                {disabledLetters && <Key keyVal={"ENTER"} bigKey={true} disabled={false} />}
                {disabledLetters && <Key keyVal={"DELETE"} bigKey={true} disabled={false}/>}
            </div>
        </div>
    )
}

export default Keyboard;