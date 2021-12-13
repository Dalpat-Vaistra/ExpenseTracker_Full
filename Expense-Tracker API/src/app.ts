import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as helmet from "helmet";

import { UserRoutes, AuthRoutes, ExpenseRoutes } from "./routes";
import errorHandler from "./middlewares/errorHandler";

class App {
  public app: express.Application;

  public userRoutes: UserRoutes = new UserRoutes();
  public authRoutes: AuthRoutes = new AuthRoutes();
  public expenseRoutes: ExpenseRoutes = new ExpenseRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.setRoutes();
    this.app.use(errorHandler);
  }

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("tiny"));
  }

  private setRoutes() {
    this.userRoutes.routes(this.app);
    this.authRoutes.routes(this.app);
    this.expenseRoutes.routes(this.app);
  }
}

export default new App().app;
