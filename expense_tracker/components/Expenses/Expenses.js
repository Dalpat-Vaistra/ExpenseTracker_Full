import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Expenses.module.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const ExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return new Date(item.date).getFullYear().toString() === filteredYear;
    // return item.date.split("-")[2].toString() === filteredYear;
  });

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilter={ExpenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
