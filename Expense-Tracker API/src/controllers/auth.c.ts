import { Request, Response, NextFunction } from "express";
import { User } from "../models";
import * as dotenv from "dotenv";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

dotenv.config();

export default class AuthUser {
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please, Enter Email Or Password");
      }
      let emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        throw new Error("Please Enter Valid Email Address");
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        const error: any = new Error("Email Not Found!");
        error.statusCode = 404;
        throw error;
      }
      // const userMethod = new User();
      // const isPasswordMatch = await userMethod.comparePassword(password);
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        const error: any = new Error("Please Enter Correct Password");
        error.statusCode = 403;
        throw error;
      }
      const payload = { email: user.email, id: user._id };
      const token = jwt.sign(payload, process.env.SECRET);
      return res
        .status(200)
        .json({ message: "Login Successful", token: "Bearer " + token });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
