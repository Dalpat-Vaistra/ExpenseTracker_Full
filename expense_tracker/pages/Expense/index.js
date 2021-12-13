import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import Expenses from "../../components/Expenses/Expenses";
import AuthContext from "../../store/auth-context";

const Expense = () => {
  const authCtx = useContext(AuthContext);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(async () => {
    const result = await axios.get("http://localhost:3030/api/expense", {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        Authorization: authCtx.token,
      },
    });
    console.log("Get Expenses : ", result.data);
    const getExp = result.data.data.map((exp) => {
      return {
        title: exp.title,
        amount: exp.amount,
        date: exp.date,
      };
    });
    console.log("Exp :", getExp);
    setExpenseList(getExp);
  }, []);

  return (
    <Fragment>
      <center>
        <h1>Welcome to Expenses Page</h1>
      </center>
      {/* {expenseList} */}
      <Expenses items={expenseList} />
    </Fragment>
  );
};

export default Expense;
