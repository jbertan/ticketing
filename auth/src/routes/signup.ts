import express, { Request, Response } from "express";
import { body } from "express-validator";
import { BadRequestError } from "@babtickets/common";
import { validateRequest } from "@babtickets/common";
import jwt from "jsonwebtoken";
import "express-async-errors";
import { User } from "../models/user";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 charachter"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError("Email in use");
    }
    /* console.log("Creatding User");
    throw new DatabaseConnectionError();
    res.send({}); */
    /* if (!email || typeof email !== "string") {
      res.status(400).send("Provide a valid email");
    } */
    const user = User.build({ email, password });

    await user.save();
    //Generate Json Web Token
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    //Save on Session Object
    req.session = { jwt: userJwt };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
