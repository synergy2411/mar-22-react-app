import React, { useRef, useState } from "react";
import { IExpense } from "../../../model/expenses";
import { v4 } from 'uuid';

const AddExpense = (props : {onAddExpense : (expense : IExpense) => void}) => {
    // let title = "insurance";
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('')

    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     body :'',
    //     createdAt : ''
    // })

    const createdAtChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCreatedAt(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     createdAt : event.target.value
        // })
        // setUserInput((prevState) => ({...prevState, createdAt : event.target.value}))
    }

    const bodyChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => setBody(event.target.value)

    const titleChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        console.log(title, body, createdAt);
        let newExpense : IExpense = {
            body, title, 
            id : v4(),
            createdAt : new Date(createdAt)
        }
        props.onAddExpense(newExpense);
        
    }
    return (
        <div className="col-6 offset-3">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center">
                        Add New Expenses
                    </h6>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        {/* title */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="title">Title :</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" 
                                    id="title"
                                        value={title} 
                                        className="form-control" 
                                        name="title" 
                                        onChange={titleChangeHandler}/>
                                </div>
                            </div>
                        </div>
                        {/* body */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="body">Body :</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" 
                                        value={body} 
                                        className="form-control" 
                                        name="body" 
                                        onChange={bodyChangeHandler}/>
                                </div>
                            </div>
                        </div>
                        {/* created at */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="createdAt">Created At :</label>
                                </div>
                                <div className="col-8">
                                    <input type="date" 
                                        name="createdAt" 
                                        className="form-control"
                                        min="03-01-2019"
                                        max="12-31-2022"
                                        value={createdAt}
                                        onChange={createdAtChangeHandler} />
                                </div>
                            </div>
                        </div>
                        {/* buttons */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-block btn-primary" type="submit">
                                        Add Expense
                                    </button>
                                </div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;