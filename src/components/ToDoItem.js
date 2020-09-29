import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, checkItem} from '../actions';
import './ToDoItem.css';
import './checkbox.css';

export default function ToDoItem(props) {

    const toDoList = useSelector(state => state.list);
    const dispatch = useDispatch();

    return (

        <div className="todo" name={props.itemIndex}>
            
            <input id="checkbox1" type="checkbox"
            className="css-checkbox"
            onClick={() => dispatch(checkItem(toDoList, props.itemIndex))}/>
            <label for="checkbox1" className="css-label dark-green-check"></label>
            
            
            {props.children}
            <button type="button"
            className="removeButton"
            onClick = {() => 
            dispatch(removeItem(toDoList, props.itemIndex))}>
                X</button>
        </div>
    )
}
