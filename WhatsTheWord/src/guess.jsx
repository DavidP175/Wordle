import './guess.css'
function Guess({isGuessed, guess, word,id }){
    
    let wordCopy = word.toLowerCase().split('');
    return (
        <div key = {id} className="guessRow">
            {new Array(5).fill(0).map((_, i) => {
                
                let state = null;
                const letter = guess[i]?.toLowerCase() ||"";
                if(isGuessed){
                    state="incorrect";
                    
                    if(letter===word[i]){
                        state ="correct";
                        wordCopy[i]=null;
                    }
                    else if(wordCopy.includes(letter)){
                        wordCopy[wordCopy.indexOf(letter)] = null;
                        state="partially";
                    }
                }
                
                return(
                    <div data-state = {state} className='letter'>
                        <p className='guessLetter'>{guess[i]}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Guess
