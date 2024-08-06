import './guess.css';
import Guess from './guess.jsx'

export default function GuessBoard ({word, guesses}){
    
    return(
        <div className='guessBoard'>
            {new Array(6).fill(0).map((_,i) => (
                <Guess key = {i} id = {i}  word = {word}guess={typeof guesses[i] === 'string' ? guesses[i].toUpperCase() : ''} isGuessed={false}/>
            ))}
        </div>
    )
}