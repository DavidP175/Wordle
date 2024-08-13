import './guess.css';
import Guess from './guess.jsx'

export default function GuessBoard ({word, guesses,curI}){
    
    return(
        <div className='guessBoard'>
            {new Array(6).fill(0).map((_,i) => {
                let isGuessed=false;
                if(curI>i){isGuessed=true}
                return (
                    <Guess isGuessed={isGuessed} key = {i} id = {i}  word = {word}guess={typeof guesses[i] === 'string' ? guesses[i].toUpperCase() : ''}/>
                )
            })}
        </div>
    )
}