import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "bertan@gmail.com", password: "12341234" })
    .expect(201);
  await request(app)
    .post("/api/users/signin")
    .send({ email: "bertan@gmail.com", password: "12341234" })
    .expect(200);
  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);
  //bullshit result tbh
  expect(response.get("Set-Cookie")).toBeDefined();
});
