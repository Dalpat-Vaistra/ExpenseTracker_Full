import app from "./app";
import * as dotenv from "dotenv";
import connect from "./config/connectDB";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Expense Tracker API");
});

// Database connection

/**
 * Server Activation
 */
app.listen(PORT, async () => {
  await connect();
  console.log(`Listing on port ${PORT}`);
});
