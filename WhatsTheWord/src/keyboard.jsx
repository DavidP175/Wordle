import KeyboardKey from "./keyboardKey";
import './keyboard.css';

const topLetters = ["Q","W","E","R","T","Y","U","I","O","P"];
const middleLetters  =["A","S","D","F","G","H","J","K","L"];
const bottomLetters = ["Z","X","C","V","B","N","M"];

export const LetterKeySet = ({letters}) => {
    
    return( 
        <>
            {letters.map((letter) => (
                <KeyboardKey key={letter}>{letter}</KeyboardKey>
            ))}
        </>
    )
}

export const Keyboard  = () => {
    return (
        <div className = "keyboard">
            <div className="keyboard-row">
                <LetterKeySet letters = {topLetters}/>
            </div>
            <div className="keyboard-row">
                <LetterKeySet letters = {middleLetters}/>
            </div>
            <div className="keyboard-row">
                <KeyboardKey id='enter'>ENTER</KeyboardKey>
                <LetterKeySet letters = {bottomLetters}/>
            </div>
        </div>
    )
}
