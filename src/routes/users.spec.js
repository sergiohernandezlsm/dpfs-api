const express = require("express");
const router = require("./users");
const request = require("supertest");
const userModel = require("../database/models/user");

const mockUserFindAll = userModel.findAll;

const app = express();
app.use(express.json());
app.use("/", router);

const mockUsers = [
  {
    id: 1,
    first_name: "sergiosssss",
    last_name: "JAJA",
    email: "Esperanza_Padberg@hotmail.com",
  },
  {
    id: 2,
    first_name: "Bridie",
    last_name: "Grant",
    email: "Josiane.Bednar@yahoo.com",
  },
];

beforeEach(() => {
  //   mockUserFindAll.mockImplementation(() => mockUsers);
});

describe("test users router", () => {
  it("test get('/users')", async () => {
    const response = await request(app).get("/users");
    // expect(response.status).toEqual(200);
  });
});
