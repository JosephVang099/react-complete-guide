import React, { useState } from "react";

import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const filterExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  // let expensesContent = <p>No Expenses Found</p>;

  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpenses.map((expense) => (
  //     <ExpenseItem 
  //       key={expense.id}
  //       title={expense.title}  
  //       amount={expense.amount} 
  //       date={expense.date} 
  //       />
  //     ));
  // }

    return (
      <div>
       
    <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} 
    />
    <ExpensesList items = {filterExpenses} />

    </Card>
  </div>
    );
};

export default Expenses;