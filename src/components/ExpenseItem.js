import "./ExpenseItem.css"

import ExpenseDate from './ExpenseDate'

import Card from './Card'

import React  from 'react'

function ExpenseItem(props){

    


    return(
        <li>
        <Card className='expense-item'>

            <ExpenseDate date= {props.date}></ExpenseDate>
           
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} rs</div>
            </div>
            
        </Card>
        </li>
    )
}

export default ExpenseItem 