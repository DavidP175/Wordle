import './guess.css'
function Guess({isGuessed, guess, word}){
    return (
        <div className="guessGrid">
            {new Array(5).fill(0).map((_, i) => (
                <div className='letter'>
                    <p className='guessLetter'>{guess[i]}</p>
                </div>
            ))}
        </div>
    )

}
export default Guess
