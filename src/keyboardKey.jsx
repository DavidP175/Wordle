import React from "react";
import './keyboard.css';

export const pending_state = "pending";
export const incorrect_state= "incorrect";
export const partially_state = "partially";
export const correct_state = "correct";


export const  KeyboardKey = ({state ,children,onClick,})=>{
    return <button onClick = {onClick} className="keyboard-key" data-state={state}>{children}</button>
}

export default KeyboardKey;