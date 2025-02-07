import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";
import userRouter from "./routes/user.route.js";
dotenv.config();
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from "path";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database".bgMagenta.white);
  })
  .catch((err) => {
    console.log(`Error Connecting to Database ${err}`.bgRed.white);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("App listening on port 3000!!!".bgBlue.white);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));  //dist will be the folder created after build

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
