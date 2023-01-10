import mongoose from "mongoose";
import { app } from "./app";
const start = async () => {
  console.log("Starting Up ...s");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT key is not set");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("Mongo Uri missing");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
    console.log("Finally");
    console.log("Finally");
  });
};

start();
