import { Application, Request, Response } from "express";
import UserController from "../controllers/user.c";
import { checkJwt } from "../middlewares/checkJwt";

export default class UserRoutes {
  public userController: UserController = new UserController();

  public routes(app: Application): void {
    //get User Data
    app.route("/api/user").get(checkJwt, this.userController.getUser);

    //Create New User
    app.route("/api/user").post(this.userController.creteUsers);
  }
}
