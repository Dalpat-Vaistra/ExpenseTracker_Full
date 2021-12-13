import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (!props.items.length) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>No Expenses Found!</h2>
    );
  }
  return (
    <ul className={classes["expenses-list"]}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
