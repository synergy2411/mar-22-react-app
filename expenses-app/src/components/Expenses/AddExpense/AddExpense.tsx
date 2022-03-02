import React, { useState } from "react";

const AddExpense = () => {
    // let title = "insurance";
    const [title, setTitle] = useState<string>('insurance')

    const titleChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
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
                    Title : {title}
                    <form>
                        {/* title */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="title">Title :</label>
                                </div>
                                <div className="col-8">
                                    <input type="text" 
                                        value={title} 
                                        className="form-control" 
                                        name="title" 
                                        onChange={titleChangeHandler}/>
                                </div>
                            </div>
                        </div>
                        {/* body */}
                        {/* created at */}
                        {/* buttons */}
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-block btn-primary">
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