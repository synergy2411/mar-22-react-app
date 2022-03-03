import { ITodo } from "../../../model/todo";

const TodoItem : React.FC<{todo : ITodo}>= (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center"> {props.todo.label.toUpperCase()}</h6>
                </div>
            </div>
        </div>
    )
}
export default TodoItem;