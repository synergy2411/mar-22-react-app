import React from 'react';
import { IExpense } from '../../../model/expenses';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

// const ExpenseItem : React.FC<IExpense> = (props) => {
const ExpenseItem = (props : IExpense) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5> {props.title.toUpperCase()} </h5>
        </div>
        <div className="card-body">
           <ExpenseDate createdAt={props.createdAt}/>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
