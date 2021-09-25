import "./ExpensesList.css";

import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
 
 
 if(props.items.length === 0){
     return <h2 className='expenses-list__fallback'>No Data Found</h2>;
  }
  

  return <ul className='expenses-List'>
       {
    props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  }
  </ul>;
};

export default ExpensesList;
