import InputTodo from "./InputTodo";
import "./css/Todo.css";
export default function Todo({name,todos,setTodos,isChecked,editingMode,todo}){

    function handleCheckbox(e){
        if(e.target.checked)
        {
            //Update checked value of todo Object
            const updatedTasks = todos.map(todo =>{
                if(todo.name === name)
                {
                    return {...todo,checked : true};
                }
                else {
                    return {...todo};
                }
                
            });
            setTodos(updatedTasks);
        }
        else if(!e.target.checked){
           // Map through array to set checked value of todo Object
            const updatedTasks = todos.map(todo =>{
                if(todo.name === name)
                {
                    return {...todo,checked : false};
                }
                else {
                    return {...todo};
                }
            });
            setTodos(updatedTasks);
        }
    }

    // Delete task
    function deleteTask(){
        const updatedTasks = todos.filter(todo =>{
        return todo.name !== name;
        });
        setTodos(updatedTasks);
        
    }
    
    // Set editing mode proprety of task to true
    function updateTaskEditMode(){
        const updatedTasks = todos.map(todo =>{
            if(todo.name === name)
            {
                return {...todo,editingMode : true};
            }
            else {
                return {...todo};
            }
        });
        setTodos(updatedTasks);
    }

    return (
        <div className={`todo ${isChecked? 'checked':'unchecked'}`} >
          <input type="checkbox" name="checkbox" id="" onChange={handleCheckbox} checked ={isChecked? true:false}/>
          {editingMode?<InputTodo setTodos = {setTodos} todos = {todos} todoName = {name}/>:<h2>{name}</h2>}
          <div className="buttons">
          {editingMode?'':<button onClick={updateTaskEditMode} className = 'editBtn'>Edit</button>}
            <button onClick={deleteTask} className = 'deleteBtn'>Delete</button>
          </div>
          
        </div>
    )
}