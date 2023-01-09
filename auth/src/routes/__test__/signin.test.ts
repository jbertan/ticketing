import request from "supertest";
import { app } from "../../app";

it("fails wend a email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(400);
});

it("pass wend a email match exist is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(200);
});

it("fail wend a email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({ email: "asdasd@gmail.com", password: "asdsdda" })
    .expect(400);
});

it("responds with cookşe when given valid cred", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({ email: "asdasd@gmail.com", password: "asdda" })
    .expect(200);
  expect(response.get("Set-Cookie")).toBeDefined();
});
