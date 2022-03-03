import axios from "axios";
import { useEffect, useState } from "react";
import { ITodo } from "../../model/todo";
import TodoItem from "./TodoItem/TodoItem";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        axios.get("http://localhost:9001/todos")
            .then(response => {
                setTodos(response.data)
            }).catch(console.log)
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                {todos.map((todo : ITodo) => {
                    return <TodoItem todo={todo} key={todo._id}/>
                })}
            </div>
        </div>
    )
}

export default Todos;