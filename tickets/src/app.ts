import express from "express";
import { json } from "body-parser";
import { errorHandler, NotFoundError, currentUser } from "@babtickets/common";
import cookieSession from "cookie-session";
import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { indexTicketRouter } from "./routes/index";
import "express-async-errors";
import { updateTicketRouter } from "./routes/update";

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
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

export { app };
