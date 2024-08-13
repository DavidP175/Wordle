 const ResetB = ({reset}) => {
    return (
        <button id ="reset" onClick={(event) =>{
            reset(event);
            event.target.blur();
        }}
        >RESET</button>
    );
}

export default ResetB;

