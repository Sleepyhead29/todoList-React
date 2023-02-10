import './css/Filter.css';
export default function FilterButton({todos,setFilteredTodos,filterType}){
    
    function filterTodos(){
        if(filterType === 'unchecked'){
            const filteredTodoArray = todos.filter(todo => todo.checked === false);
            setFilteredTodos(filteredTodoArray);
        }else if(filterType === 'checked'){
            const filteredTodoArray = todos.filter(todo => todo.checked === true);
            setFilteredTodos(filteredTodoArray);
        }else{
            setFilteredTodos();
        }
        
    }
    return (
        <button onClick={filterTodos}>Filter By {filterType}</button>
    )
}