import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(true);
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const onSaveExpenseDataHandler = async (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    await addExpenseHandler(expenseData);
    setFlag(true);
  };

  const addExpenseHandler = async (expenseData) => {
    try {
      const result = await axios({
        url: "http://localhost:3030/api/expense",
        method: "POST",
        data: { ...expenseData },
        headers: {
          "Content-Type": "application/json",
          Authorization: authCtx.token,
        },
      });

      if (result.data) alert(result.data.message);
      router.push("/add-expense");
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.Error);
    }
  };

  const onCancelHandler = () => {
    setFlag(true);
  };
  const AddNewExpenseHandler = () => {
    setFlag(false);
  };
  return (
    <div className={classes["new-expense"]}>
      {flag ? (
        <button onClick={AddNewExpenseHandler}> Add New Expense </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
