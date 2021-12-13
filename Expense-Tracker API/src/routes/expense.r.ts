import { Application } from "express";

import ExpenseController from "../controllers/expense.c";
import { checkJwt } from "../middlewares/checkJwt";

export default class ExpenseRoutes {
  public expenseController: ExpenseController = new ExpenseController();

  public routes(app: Application): void {
    app.route("/api/expense").get(checkJwt, this.expenseController.getExpenses);

    app.route("/api/expense").post(checkJwt, this.expenseController.addExpense);
  }
}
