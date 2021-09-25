
import React , {useState} from 'react'

import './ExpenseForm.css'


const ExpenseForm = (props) => {

  const[enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount,setEnteredAmount]= useState('')
  const [enteredDate,setEnteredDate] = useState('')

  const clickChangeHandler= (evt)=>{
    setEnteredTitle(evt.target.value)
  }

  const amountChangeHandler = (evt)=>{
    setEnteredAmount(evt.target.value)
  }

  const dateChangeHandler = (evt)=>{
    setEnteredDate(evt.target.value)
  }

  const submitHandler = (evt)=>{


    evt.preventDefault()

    const expenseData={

    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate)

    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label>Title:</label>
        <input type="text" value={enteredTitle} onChange={clickChangeHandler}></input>
      </div>

      <div className="new-expense__controls">
        <label>Amount:</label>
        <input type="number"  value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
      </div>

      <div className="new-expense__controls">
        <label>Date:</label>
        <input type="date" value={enteredDate} min='2019-01-01' max='2022-01-01' onChange={dateChangeHandler}></input>
      </div>
      <div className="new-expense__controls">
      <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
