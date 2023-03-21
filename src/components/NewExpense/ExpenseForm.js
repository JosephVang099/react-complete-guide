import React, { useState } from "react";

import './ExpenseForm.js';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] =useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

// TITLE
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput, // this takes an object, pulls out all the key values pairs and adds them to the new objects.
        //     enteredTitle: event.target.value,
        // })

        // Should only use this "prevState" whenever my state update depends on the previous state
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    };

// AMOUNT  
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    
// DATE
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}>

        <div className="new-expense__controls">
            <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min="0.01" 
                    step="0.1" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                    type='date' 
                    min="2019-01-01" 
                    max="2023-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>

    </form>
    );
};

export default ExpenseForm;