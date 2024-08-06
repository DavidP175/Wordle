import React, { useEffect, useState } from 'react';
import Header from './header.jsx';
import './App.css';
import { Keyboard } from './keyboard.jsx';
import GuessBoard from './guessboard.jsx';
import {getWords} from './words.jsx';


function App() {
  const [words] = useState(getWords());
  useEffect(() => {
    
    const word = words[Math.floor(Math.random()*words.length)]; 
    
  },[]);
    
  const [curGuess, setcurGuess] = useState('');
  const [guesses, setGuesses] = useState(["","","","","",""]);
  const[i,incr] = useState(0);
  
  useEffect(() =>{

    const handleKeyDown = (event)=>{
      
      if( event.key>='a' && event.key<='z' && curGuess.length<5 ){
        setcurGuess((prevCG) => {
          const newcurGuess = prevCG+event.key;
          setGuesses((prevG) => {
            const newGuesses = [...prevG];
            newGuesses[i]= newcurGuess;
            return newGuesses;
          });
          return newcurGuess;
        });        
        
      }
      else if (event.key == "Enter" && curGuess.length == 5 && words.includes(curGuess.toLowerCase())){
        setGuesses((prevG) => {
          const newGuesses = [...prevG];
          newGuesses[i]=curGuess;
          return newGuesses;
        });
        incr((previ) => previ+1);
        setcurGuess('');
      }
        
      
      else if (event.key == "Backspace"){
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
      
      
    }
    
    

    window.addEventListener('keydown',handleKeyDown);

    
    
    return ()=> {
      window.removeEventListener('keydown',handleKeyDown)
      

    }
  },[curGuess,i]);
  
  const handleKeyClick  = (key)=>{

    console.log(key);
    if (key == "Enter" && curGuess.length == 5 && words.includes(curGuess.toLowerCase())){
      setGuesses((prevG) => {
        const newGuesses = [...prevG];
        newGuesses[i]=curGuess;
        return newGuesses;
      });
      incr((previ) => previ+1);
      setcurGuess('');
    }
    else if (key == "Backspace"){
      console.log("b1");
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
    else if( key>='A' && key<='Z' && curGuess.length<5 && key!="Enter"){
      console.log("yes");
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
  
  
  return (
    <>
      <Header/>
      <GuessBoard word="ADIEU" guesses = {guesses}></GuessBoard>
      <Keyboard onKeyClick={handleKeyClick}/>
    
    </>
      
   
  )
}

export default App
