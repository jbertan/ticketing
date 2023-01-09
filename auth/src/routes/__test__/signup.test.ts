import request from "supertest";
import { app } from "../../app";

it("returns a 201 on succesfull signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd", password: "password" })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "p" })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "12312312" })
    .expect(400);
});

it("Diss allows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "12341234" })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "12341234" })
    .expect(400);
});

it("sets a cookie after succesfull signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "12341234" })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
