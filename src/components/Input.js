import React, {useState, useRef} from 'react'
import './Input.css'

export default function Input(props) {
    const [state, setstate] = useState("");
    const inputRef = useRef(null);
    function handleClick()
    {
        if ( inputRef.current.value !=='')
        {
            props.handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }
        
    }
    return (
        <div>
            <form>
                <label className="todoText" for="todo">To Do: </label>
                <input type="text" className="input" id="todo" name="todo" ref={inputRef}/>
                <button type="button" className="addButton" onClick={() => handleClick()}>Add</button>
            </form>
            
        </div>
    )
}
