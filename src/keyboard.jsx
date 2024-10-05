import KeyboardKey from "./keyboardKey";
import './keyboard.css';
import { IoBackspaceOutline } from "react-icons/io5";
import {useEffect, useRef} from "react";


const topLetters = ["Q","W","E","R","T","Y","U","I","O","P"];
const middleLetters  =["A","S","D","F","G","H","J","K","L"];
const bottomLetters = ["Z","X","C","V","B","N","M"];



export const LetterKeySet = ({letters, onKeyClick,word,guesses,curI}) => {
    
    return( 
        <>
            {letters.map((letter) => {
                
                let state = "pending";
                for(let i=0; i<curI; i++){
                    if(word.includes(letter.toLowerCase())&&guesses[i].includes(letter)){
                        state = "partially";
                        for(let j=0; j<5; j++){
                            if(guesses[i][j]==word[j].toUpperCase()&&word[j].toUpperCase()==letter){
                                state = "correct";
                            }
                        }
                    }
                    else if(guesses[i].includes(letter)){
                        state = "incorrect";
                    }
                }
                
                return (
                <KeyboardKey state = {state} key={letter} onClick = {() => onKeyClick(letter)}>
                    {letter}
                </KeyboardKey>
                );
            })}
        </>
    )
}



export const Keyboard  = ({onKeyClick,word,guesses,curI}) => {

    const keyboardRef = useRef(null);



    return (
        <div ref={keyboardRef} className = "keyboard">
            <div className="keyboard-row">
                <LetterKeySet curI={curI} word = {word} guesses = {guesses} letters = {topLetters} onKeyClick={onKeyClick}/>
            </div>
            <div className="keyboard-row">
                <LetterKeySet curI={curI} word = {word} guesses = {guesses} letters = {middleLetters} onKeyClick={onKeyClick} />
            </div>
            <div className="keyboard-row">
                <KeyboardKey id='enter' onClick={() => onKeyClick('Enter')}>Enter</KeyboardKey>
                <LetterKeySet curI={curI} word = {word} guesses = {guesses} letters = {bottomLetters} onKeyClick={onKeyClick}/>
                <KeyboardKey id='backspace' onClick={() => onKeyClick('Backspace')}>
                    <IoBackspaceOutline size={25}/>
                </KeyboardKey>
            </div>
        </div>
    )
}
