import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { errorHandler, NotFoundError, currentUser } from "@babtickets/common";
import { createChargeRouter } from "./routes/new";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true); //Search for it
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);
app.use(createChargeRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

export { app };
