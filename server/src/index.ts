import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the BugFlow API!");
});

app.use("/api/auth", auth);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🚀 Server is running on port ${PORT}`);
});

export default app;
