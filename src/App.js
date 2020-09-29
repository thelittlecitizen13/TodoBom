import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';

function App() {

  const [toDos, setToDos] = useState({data: []});
  const [currentToDo, setcurrentToDo] = useState();
  function createToDo(data)
  {
      
      
      // var listDiv = document.getElementById('List'); //ListRef.value;
      // var todoRecord = React.createElement('p', null, "hello");
      // ReactDOM.render(todoRecord, listDiv);
      var newToDos = [data, ...toDos.data];
      setToDos({data: newToDos});
      console.log('z')
      
  }

  function createList() {
    var components = [];
    for (var i = 0; i<toDos.data.length; i++) {
      var component = 
      <ToDoItem>
        {toDos.data[i]}
      </ToDoItem>
      components.push(component);
      
    }
    var list = React.createElement('div', {}, components);
    return list;
//{toDos.data.map(x => <p>{x}</p>)}
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
