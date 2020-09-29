import React from 'react'

export default function Input(props) {
    // function handleSubmit(e)
    // {
        
    //     props.handleClick();

    // }
    // function handleChange(e)
    // {
    //     props.setToDo(e.target.value)
    // }
    return (
        <div>
            <form>
                <label for="todo">To Do:</label>
                <input type="text" id="todo" name="todo" />
                <button type="button" value="Submit" onClick={() => props.handleClick("h")}/>
            </form>
            
        </div>
    )
}
