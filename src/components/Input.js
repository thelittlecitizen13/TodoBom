import React, {useState} from 'react'


export default function Input(props) {
    const [state, setstate] = useState("");
    return (
        <div>
            <form>
                <label for="todo">To Do:</label>
                <input type="text" id="todo" name="todo" onInput={(val) => setstate(val.target.value)}/>
                <button type="button" value="Submit" onClick={() => props.handleClick(state)}/>
            </form>
            
        </div>
    )
}
