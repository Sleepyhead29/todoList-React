import { useRef,useEffect} from "react"

export default function InputTodo({setTodos,todos,todoName}){
    // Register user input
    const userInput = useRef();
    // Side effects
    useEffect(() => {
      userInput.current.value = '';
      userInput.current.focus();
    },[todos,userInput])
    
    // Handle submit
    function handleSubmit(e){
      e.preventDefault();
      //Update todos state
      if(userInput.current.value)
      {
        setTodos([...todos,{"name": userInput.current.value, "checked": false, "deleted": false, "editingMode": false}])
      }
      // Access todo object name Done : use todoName variable
    // Change values of todo object name
      if(todoName)
      {
        updateTask();
      }
      
    }
  
  
     //Update task
    function updateTask(){
      const updatedTasks = todos.map((todo) =>{
        if(todo.editingMode === true && todo.name === todoName &&userInput.current.value){
           return {...todo,name: userInput.current.value,editingMode: false,checked: false};
          
        } else if(todo.editingMode === true && userInput.current.value === ''){
          return {...todo,editingMode: false};
        }
        else{
          return {...todo};
        }
        
      })
      setTodos(updatedTasks); 
      
  }
 
    return (
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder = 'task to do...' ref={userInput} />
        </form>
    )
}