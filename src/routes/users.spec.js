const express = require("express");
const router = require("./users");
const request = require("supertest");
const models = require("../database/models");

jest.mock("../database/models");
const mockUserFindAll = models.user.findAll;

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
  mockUserFindAll.mockImplementation(() => mockUsers);
});

describe("test users router", () => {
  it("test get all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toEqual(500);
  });
});
