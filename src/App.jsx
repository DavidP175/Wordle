import React, { useEffect, useState } from 'react';
import Header from './header.jsx';
import './App.css';
import { Keyboard } from './keyboard.jsx';
import GuessBoard from './guessboard.jsx';
import getWords from './words.jsx';
import WordReveal from './wordReveal.jsx';
import ResetB from './reset.jsx';


function App() {
  const [words] = useState(getWords());
  const [word,setWord] = useState(words[Math.floor(Math.random()*2308)+12547]); 
    
  useEffect(() => {
    setWord(words[Math.floor(Math.random()*2308)+12547]);
    
  },[]);
    
  const [curGuess, setcurGuess] = useState('');
  const [guesses, setGuesses] = useState(["","","","","",""]);
  const[i,incr] = useState(0);
  const[gameOver,endGame] = useState(false);
  const[won,win] = useState(false);

  const reset  = (event) => {
    setWord(words[Math.floor(Math.random()*2308)+12547]);
    setcurGuess("");
    setGuesses("","","","","","");
    incr(0);
    endGame(false);
    win(false);
    event.target.blur();
  }

  const updateGuess = (key)  =>{
    
    
    if (key == "Enter" && curGuess.length == 5 && words.includes(curGuess.toLowerCase())){
      setGuesses((prevG) => {
        const newGuesses = [...prevG];
        newGuesses[i]=curGuess;
        return newGuesses;
      });
      incr((previ) => previ+1);
      

      if(curGuess==word.toUpperCase()){
        console.log("won")
        endGame(true);
        win(true)
      }
      if(i>4){
        endGame(true)
      }
      
      setcurGuess('');
    }
    else if (key == "Backspace"){
      setcurGuess((prevCG) => {
        const newcurGuess = prevCG.slice(0,-1);
        setGuesses((prevG) => {
          const newGuesses = [...prevG];
          newGuesses[i] = newcurGuess
          return newGuesses;
        });
        return newcurGuess;
      });
    }
    else if( key>='A' && key<='Z' && curGuess.length<5 && key.length==1){
      setcurGuess((prevCG) => {
        const newcurGuess = prevCG+key;
        setGuesses((prevG) => {
          const newGuesses = [...prevG];
          newGuesses[i]= newcurGuess;
          return newGuesses;
        });
        return newcurGuess;
      }); 
    }
  }

  useEffect(() =>{
    
    const handleKeyDown = (event)=>{
      let e = event.key;
      if(event.key.length==1){
        
        e=event.key.toUpperCase();
        
      }
      updateGuess(e);
    }
    
    

    window.addEventListener('keydown',handleKeyDown);

    
    
    return ()=> {
      window.removeEventListener('keydown',handleKeyDown)
      

    }
  },[curGuess,i]);
  
  const handleKeyClick  = (key)=>{
    updateGuess(key);
  }
  
  
  return (
    <>
      <Header/>
      <WordReveal won = {won} gameOver={gameOver} word = {word}/>
      <GuessBoard curI={i} word= {word} guesses = {guesses}></GuessBoard>
      <ResetB reset ={reset} />
      <Keyboard curI={i} word = {word} guesses = {guesses} onKeyClick={handleKeyClick}/>
    
    </>
      
   
  )
}

export default App
