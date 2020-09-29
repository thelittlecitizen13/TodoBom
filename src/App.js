import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import {addItem, removeItem} from './actions';

function App() {

  const toDoList = useSelector(state => state.list);
  const dispatch = useDispatch();
  const [toDos, setToDos] = useState({data: []});
  const [currentToDo, setcurrentToDo] = useState();
  function createToDo(data)
  {
      dispatch(addItem(data));
  }

  function createList() {
    var components = [];
    for (var i = 0; i<toDoList.length; i++) {
      var component = 
      <ToDoItem itemIndex={i}>
        {toDoList[i].todo}
      </ToDoItem>
      components.push(component);
      
    }
    var list = React.createElement('div', {}, components);
    return list;
  }

  return (
    <div className="App">
      <Input handleClick={createToDo}/>
      <div id="List" >
      {createList()}
      </div>
    </div>
  );
}

export default App;
