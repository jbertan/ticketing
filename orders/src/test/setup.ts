import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}

jest.mock("../nats-wrapper");

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfasdf";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
//Very important we made it for fake auth !!!!!!!!!! cant make dependencies btw
//services fdor getting auth
global.signin = () => {
  // Build a jwt payload {id email}
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "bertan@gmail.com",
  };
  //create jwt
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  //Build Sesssion Object
  const session = { jwt: token };
  //Turn that session into json
  const sessionJSON = JSON.stringify(session);
  //Take json and encode it as bae 64
  const base64 = Buffer.from(sessionJSON).toString("base64");
  //return a string cookie with jwt data
  return [`session=${base64}`];
};
