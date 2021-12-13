import { Request, Response, NextFunction } from "express";
import { Expense } from "../models";

export default class ExpenseController {
  public getExpenses = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = res.locals.userId;
      const expenses = await Expense.find({ uId: userId });
      if (!expenses.length) {
        const error: any = new Error(
          "No Expenses Found! Or You haven't Add Yet"
        );
        error.statusCode = 404;
        throw error;
      }
      return res.status(200).json({ data: expenses });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public addExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = res.locals.userId;
      console.log("New Exp :", req.body);
      const { title, amount, date } = req.body;
      if (!title || !amount) {
        throw new Error("Please Fill All the Details");
      }
      if (date === null) throw new Error("Please Select Proper Date");

      const expense = new Expense({ ...req.body, uId: userId });
      await expense.save();

      return res.status(201).json({ message: "Expense Added Successfully!" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
