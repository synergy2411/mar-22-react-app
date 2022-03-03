import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ITodo } from "../../../model/todo";
import classes from './TodoEdit.module.css';

const TodoEdit = () => {

    const params = useParams<{todoId : string}>()
    const {todoId} = params;
    const [todo, setTodo] = useState<ITodo>()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:9001/todos/${todoId}`)
            .then(response => {
                setTodo(response.data)
            }).catch(console.log)
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:9001/todos/${todo?._id}`)
            .then(response => history.replace("/todos"))
            .catch(console.log)
    }
    return (
        <div className={classes.backdrop}>
            <div className={`row ${classes["the-card"]}`}>
                <div className="col-10 offset-1">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-center">{todo?.label.toUpperCase()}</h6>
                        </div>
                        <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-danger btn-block"
                                            onClick={deleteHandler}>DELETE</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-secondary btn-block">EDIT</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoEdit;