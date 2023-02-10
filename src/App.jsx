import { useState,useEffect} from 'react';
import Todo from './Todo';
import InputTodo from './InputTodo';
import FilterButton from './FilterButton';
import './css/App.css';

function App() {
  /************** STATES **************/
 
  // Track Todos state
  const [todos,setTodos] = useState(localStorage.getItem("todosArray")?JSON.parse(localStorage.getItem('todosArray')):[]);
  // Track Filtered Todos state
  const [filteredTodos,setFilteredTodos] = useState();

  
  // After rendering
  useEffect(()=> {
    localStorage.setItem("todosArray", JSON.stringify(todos));
  },[todos]);


  return (
    <div className="App">
      <h1>TodoList</h1>
      {/* Track input changes using onChange function and event object */}
      <InputTodo setTodos = {setTodos} todos = {todos}/>
      <div className="filters">
        {/** SORT OPTIONS
            * SORT BY COMPLETED
            * SORT BY UNCOMPLETED
            * 
         */
}
      <FilterButton todos = {todos} setFilteredTodos = {setFilteredTodos} filterType = {'All'}/>
      <FilterButton todos = {todos} setFilteredTodos = {setFilteredTodos} filterType = {'unchecked'}/>
      <FilterButton todos = {todos} setFilteredTodos = {setFilteredTodos} filterType = {'checked'}/>
      </div>
      
      <div className="todos">
        {/* Generate Todo component dynamically */}
        {
          filteredTodos ? filteredTodos.map((todo)=> {
            return (
              <Todo key = {todo.name.toString()} name = {todo.name} isChecked = {todo.checked} setTodos = {setTodos} todos = {todos} editingMode = {todo.editingMode} todo = {todo}/>
            )
          }) : todos.map((todo)=> {
            return (
              <Todo key = {todo.name.toString()} name = {todo.name} isChecked = {todo.checked} setTodos = {setTodos} todos = {todos} editingMode = {todo.editingMode} todo = {todo}/>
            )
          })
          
        }
      </div>
    </div>
  );
}

export default App;
