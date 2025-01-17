import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    
    const {todos} = props
    const {selectedTab} = props

    const tab = selectedTab
    const filterTodoList = tab ==='All' ? 
        todos:
        tab === 'Completed' ?
        todos.filter(val => val.complete):
        todos.filter(val => !val.complete)
    
    return (
        <>
            {filterTodoList.map((todo,todoIndex)=>{
                return (
                    <TodoCard {...props} 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val => val.input == todo.input)} 
                        todo={todo}/>
                )
            })}  
        </>
    )
}