import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AddTodo = () => {

    const [enteredTodo, setEnteredTodo] = useState<string>('')
    const history = useHistory()

    const submitHandler = (event : React.SyntheticEvent) => {
        event.preventDefault();
        console.log(enteredTodo);
        axios.post("http://localhost:9001/todos", 
                    JSON.stringify({label : enteredTodo}),{
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    })
            .then(response => {
                history.push("/todos")
            })
            .catch(console.log)
    }

    const todoChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTodo(event.target.value);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-8">
                      <input type="text" className="form-control"
                        value={enteredTodo} onChange={todoChangeHandler} />
                    </div>
                    <div className="col-4">
                      <button className="btn btn-block btn-success" type="submit">Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
