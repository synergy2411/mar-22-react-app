import { useHistory } from "react-router-dom";
import { ITodo } from "../../../model/todo";
import classes from './TodoItem.module.css';

const TodoItem : React.FC<{todo : ITodo}>= (props) => {

    const history = useHistory();
    const clickHandler = () => {
        history.push(`/todos/${props.todo._id}`)
    }

    return (
        <div className={`col-4`} onClick={clickHandler}>
            <div className={`card ${classes['the-click']}`}>
                <div className="card-header">
                    <h6 className="text-center"> {props.todo.label.toUpperCase()}</h6>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;