import TodoTable from './components/TodoTable'
import GetData from './components/GetData'
import './App.css';
import React, {useEffect, useState} from 'react'

function App () {

  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");
  
  const typingInput = (event) => {
    setUserInput(event.target.value)
  }
  
  const GetDatas = () => {
    GetData()
    .then(data => {
      setTodos(data);
    })
  }

  const addTodo = async () => {
    let sending = {todo:userInput,
      done:false, 
      date:Date.now()};
    console.log(sending);

    const updateset = await fetch('/api/todo',{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(sending)
    })
    return await updateset.json()
    .then(window.location.reload(true));
  }

  const refTodo = async() => {
     window.location.reload(true);
  }

  useEffect(() => {
    GetDatas();
  },[]);

  return (
    <div className="display-wrapper">
      <header>
        <h1>My Todos</h1>
      </header>
      <section className='input'>
        <input className='textbox' value={userInput} onChange={typingInput}></input>
        <button type='submit' className='addbutton' onClick={addTodo}>Add</button>
        <button className='refbutton' onClick={refTodo}>Refresh</button>  
      </section>
      <section className="display-box">
        <TodoTable todos={todos} GetDatas={GetDatas}/>
      </section>
    </div>
  );
}

export default App;
