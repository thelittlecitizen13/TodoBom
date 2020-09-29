import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeItem, checkItem} from '../actions';

export default function ToDoItem(props) {

    const toDoList = useSelector(state => state.list);
    const dispatch = useDispatch();

    return (

        <div name={props.itemIndex}>
            <input type="checkbox" onClick={() => dispatch(checkItem(toDoList, props.itemIndex))}/>
            {props.children}
            <button type="button"
            onClick = {() => 
            dispatch(removeItem(toDoList, props.itemIndex))}>
                X</button>
        </div>
    )
}
