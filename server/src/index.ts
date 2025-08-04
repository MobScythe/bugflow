import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the BugFlow API!");
});

app.listen(PORT, () => {
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🚀 Server is running on port ${PORT}`);
});

export default app;
