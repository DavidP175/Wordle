const WordReveal = ({word,won,gameOver}) => {
    const w = ["wow","great","nice"]
    let m =word;
    if(gameOver){   
        if(won){
            m=w[Math.floor(Math.random()*w.length)];
        }
        return (
            <div id ="wordReveal">
                {m.toUpperCase()}
            </div>
        )
    }
    else return;
}
export default WordReveal;