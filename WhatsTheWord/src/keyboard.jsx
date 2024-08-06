import KeyboardKey from "./keyboardKey";
import './keyboard.css';
import { IoBackspaceOutline } from "react-icons/io5";
import {useEffect, useRef} from "react";


const topLetters = ["Q","W","E","R","T","Y","U","I","O","P"];
const middleLetters  =["A","S","D","F","G","H","J","K","L"];
const bottomLetters = ["Z","X","C","V","B","N","M"];

export const LetterKeySet = ({letters, onKeyClick }) => {
    
    return( 
        <>
            {letters.map((letter) => (
                <KeyboardKey key={letter} onClick = {() => onKeyClick(letter)}>
                    {letter}
                </KeyboardKey>
            ))}
        </>
    )
}



export const Keyboard  = ({onKeyClick}) => {

    const keyboardRef = useRef(null);



    return (
        <div ref={keyboardRef} className = "keyboard">
            <div className="keyboard-row">
                <LetterKeySet letters = {topLetters} onKeyClick={onKeyClick}/>
            </div>
            <div className="keyboard-row">
                <LetterKeySet letters = {middleLetters} onKeyClick={onKeyClick} />
            </div>
            <div className="keyboard-row">
                <KeyboardKey id='enter' onClick={() => onKeyClick('Enter')}>Enter</KeyboardKey>
                <LetterKeySet letters = {bottomLetters} onKeyClick={onKeyClick}/>
                <KeyboardKey id='backspace' onClick={() => onKeyClick('Backspace')}>
                    <IoBackspaceOutline size={25}/>
                </KeyboardKey>
            </div>
        </div>
    )
}
