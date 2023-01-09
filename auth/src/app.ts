import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "@babtickets/common";
import { NotFoundError } from "@babtickets/common";
import cookieSession from "cookie-session";

import "express-async-errors";
const app = express();
app.set("trust proxy", true); //Search for it
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

export { app };
