import { Request, Response, NextFunction } from "express";
import { User } from "../models";

export default class UserController {
  public creteUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, name, password } = req.body;
      if (!email || !name || !password) {
        throw new Error("All Fields Are Required!");
      }
      let emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        throw new Error("Please Enter Valid Email Address");
      }
      const user = new User({
        ...req.body,
      });
      await user.save();
      return res
        .status(201)
        .json({ message: "User Created!", type: "success" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = res.locals.userId;
      const user = await User.findById({ _id: userId });
      if (!user) {
        const error: any = new Error("User Not Found!");
        error.statusCode = 404;
        throw error;
      }
      user.password = "";
      res.status(200).json({ data: user, type: "success" });
    } catch (err) {
      console.log(err);
      next();
    }
  };
}
