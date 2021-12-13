import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Not Authenticated!");
    }
    const token = authHeader.split(" ").slice(1).toString();
    let decodedToken: any;
    decodedToken = jwt.verify(token, process.env.SECRET);
    res.locals.userId = decodedToken.id;
    next();
  } catch (err) {
    console.log(err);
    err.statusCode = 401;
    if (err.name === "TokenExpiredError")
      err.message = " Whoops, Your Token has Expired !";
    else err.message = "Not Authenticated User";
    next(err);
  }
};
