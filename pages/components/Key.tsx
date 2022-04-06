import React, {  useContext } from "react";
import { AppContext } from "..";
import { AppContextType } from "../../utils/words";

const Key: React.FC<KeyProps> = ({ keyVal, bigKey, disabled }) => {
    const { onSelectLetter, onEnter, onDelete } = useContext(AppContext) as AppContextType

    const selectLetter = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === 'DELETE') {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }

    return (
        <div className="key" id={bigKey === true ? 'big': disabled ? 'disabled' : ''} onClick={selectLetter}>
             {keyVal}
        </div>
    )
}

export default Key

type KeyProps = {
    keyVal: string;
    bigKey: boolean;
    disabled?: boolean;
}