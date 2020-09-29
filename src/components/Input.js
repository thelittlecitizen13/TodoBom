import React, {useState} from 'react'
import './Input.css'

export default function Input(props) {
    const [state, setstate] = useState("");
    return (
        <div>
            <form>
                <label for="todo">To Do:</label>
                <input type="text" className="input" id="todo" name="todo" onInput={(val) => setstate(val.target.value)}/>
                <button type="button" className="addButton" onClick={() => props.handleClick(state)}>Add</button>
            </form>
            
        </div>
    )
}
