import React, { useState } from "react";
import { IExpense } from "../../model/expenses";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = () => {
  const expenses: IExpense[] = [
    {
      id: "e101",
      title: "grocery",
      body: "to buy the pulses",
      createdAt: new Date("Dec 21, 2019"),
    },
    {
      id: "e102",
      title: "shopping",
      body: "to buy jeans",
      createdAt: new Date("Jan 1, 2020"),
    },
    {
      id: "e103",
      title: "plants",
      body: "to pot the plants",
      createdAt: new Date("Aug 12, 2021"),
    },
  ];

  const [showForm, setShowForm] = useState<boolean>(false)

  const clickHandler = () => {
      setShowForm(!showForm);
  }

  return (
    <div className="container">
      <p className="text-center display-4">My Expenses App</p>
      <div className="row">
          <div className="col-4 offset-4">
              <button className="btn btn-secondary btn-block" onClick={clickHandler}>
                  {showForm ? 'Hide Form' : 'Add Expense'}
              </button>
          </div>
      </div>
      <div className="row">
        <ExpenseItem
          id={expenses[0].id}
          title={expenses[0].title}
          body={expenses[0].body}
          createdAt={expenses[0].createdAt}
        />
        <ExpenseItem
          id={expenses[1].id}
          title={expenses[1].title}
          body={expenses[1].body}
          createdAt={expenses[1].createdAt}
        />
        <ExpenseItem
          id={expenses[2].id}
          title={expenses[2].title}
          body={expenses[2].body}
          createdAt={expenses[2].createdAt}
        />
      </div>
      <div className="row">
          {/* {showForm ? <AddExpense /> : 'Click the button to add new item'} */}
          {showForm && <AddExpense />}
      </div>
    </div>
  );
};

// class Expenses extends React.Component {
//     // constructor(props : Object){
//     //     super(props);
//     // }
//     render(): React.ReactNode {
//         return (
//             <div>
//                 <p>Class based component</p>
//             </div>
//         )
//     }
// }

export default Expenses;
