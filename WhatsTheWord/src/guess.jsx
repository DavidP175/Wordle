import './guess.css'
function Guess({isGuessed, guess, word,id }){
    return (
        <div key = {id} className="guessRow">
            {new Array(5).fill(0).map((_, i) => (
                <div className='letter'>
                    <p className='guessLetter'>{guess[i]}</p>
                </div>
            ))}
        </div>
    )

}
export default Guess
