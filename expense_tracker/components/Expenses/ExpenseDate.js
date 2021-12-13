import React from "react";
import classes from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();
  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
