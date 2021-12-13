import * as Mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connect = () => {
  const dbUri = process.env.dbUri as string;

  return Mongoose.connect(dbUri)
    .then(() => console.log("Database Connected"))
    .catch((error) => {
      console.log("Database Error :", error);
      process.exit(1);
    });
};

export default connect;
