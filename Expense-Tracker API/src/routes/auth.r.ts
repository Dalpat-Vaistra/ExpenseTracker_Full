import { Application } from "express";
import AuthController from "../controllers/auth.c";

export default class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes(app: Application): void {
    app.route("/api/login").post(this.authController.login);
  }
}
