import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addItem, removeItem} from '../actions';

export default function ToDoItem(props) {

    const toDoList = useSelector(state => state.list);
    const dispatch = useDispatch();

    return (
        <div name={props.itemIndex}>
            {props.children}
            <button type="button" value='X' 
            onClick = {() => 
            dispatch(removeItem(toDoList, props.itemIndex))}/>
        </div>
    )
}
