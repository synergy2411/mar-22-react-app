import React, { useState } from "react";
import { IExpense } from "../../model/expenses";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import FilterExpense from "./FillterExpenses/FilterExpense";
// import { INITIAL_EXPENSES } from '../../model/mocks';

let INITIAL_EXPENSES: IExpense[] = [
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

const Expenses = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([...INITIAL_EXPENSES]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [initialYear, setInitialYear] = useState<string>("2019");

  let filteredExpenses : IExpense[] = [];

  const clickHandler = () => {
    setShowForm(!showForm);
  };
  const onAddExpense = (newExpense: IExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
    setShowForm(false);
  };


  const onYearSelect = (selectYear: string) => {
    setInitialYear(selectYear);
  };

  filteredExpenses = expenses.filter(
    (exp) => exp.createdAt.getFullYear().toString() === initialYear
  );

  return (
    <div className="container">
      <p className="text-center display-4">My Expenses App</p>
      <div className="row">
        <div className="col-4 offset-4">
          <button
            className="btn btn-secondary btn-block"
            onClick={clickHandler}
          >
            {showForm ? "Hide Form" : "Add Expense"}
          </button>
        </div>
        <div className="col-4">
          <FilterExpense
            initialYear={initialYear}
            onYearSelect={onYearSelect}
          />
        </div>
      </div>
      <br />
      <div className="row">
        {filteredExpenses.map((exp) => {
          return (
            <ExpenseItem
              id={exp.id}
              title={exp.title}
              body={exp.body}
              createdAt={exp.createdAt}
              key={exp.id}
            />
          );
        })}
      </div>
      <div className="row">
        {/* {showForm ? <AddExpense /> : 'Click the button to add new item'} */}
        {showForm && <AddExpense onAddExpense={onAddExpense} />}
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
