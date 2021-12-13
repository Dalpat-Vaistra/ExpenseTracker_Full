import * as Mongoose from "mongoose";

export interface ExpenseDocument extends Mongoose.Document {
  title: string;
  amount: number;
  date: Date;
  uId: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExpenseSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  uId: { type: String },
});

const Expense = Mongoose.model<ExpenseDocument>("expenses", ExpenseSchema);

export default Expense;
