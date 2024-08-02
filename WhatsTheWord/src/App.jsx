import React from 'react'
import Header from './header.jsx'
import './App.css'
import Guess from './guess.jsx'
import KeyboardKey from './keyboardKey.jsx'
import { Keyboard } from './keyboard.jsx'
import { LetterKeySet } from './keyboard.jsx'

const topLetters = ["Q","W","E","R","T","Y","U","I","O","P"];

function App() {
   
  return (
    <>
      <Header/>
      <Guess word={"tests"} guess={"GUESS"} isGuessed={false} />
      <Keyboard/>
      
    </>
      
   
  )
}

export default App
