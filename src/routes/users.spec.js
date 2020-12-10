const express = require("express");
const router = require("./users");
const request = require("supertest");
const models = require("../database/models");

jest.mock("../database/models");
const mockUserFindAll = models.user.findAll;
const mockUserFindByPk = models.user.findByPk;
const mockBuild = models.user.build;

const app = express();
app.use(express.json());
app.use("/", router);

const mockUsers = [
  {
    id: 1,
    firstName: "sergiosssss",
    lastName: "JAJA",
    email: "Esperanza_Padberg@hotmail.com",
  },
  {
    id: 2,
    firstName: "Bridie",
    lastName: "Grant",
    email: "Josiane.Bednar@yahoo.com",
  },
];

const mockUser = {
  id: 3,
  firstName: "sergiosssss",
  lastName: "JAJA",
  email: "Esperanza_Padberg@hotmail.com",
};

beforeEach(() => {
  jest.clearAllMocks();
  mockUserFindAll.mockImplementation(() => mockUsers);
  mockUserFindByPk.mockImplementation(() => mockUsers);
});

describe("test users router", () => {
  it("test get all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toEqual(200);
  });

  it("test cannot get all users 404", async () => {
    mockUserFindAll.mockImplementation(() => []);
    const response = await request(app).get("/users");
    expect(response.status).toEqual(404);
  });

  it("test cannot get all users throwing error", async () => {
    mockUserFindAll.mockImplementation(() => {
      throw 'error';
    });
    const response = await request(app).get("/users");
    expect(response.status).toEqual(500);
  });

  it("test get user by id", async () => {
    const id = 1;
    const response = await request(app).get(`/users/${id}`);
    expect(response.status).toEqual(200);
  });

  it("test cannot get user by id", async () => {
    mockUserFindByPk.mockImplementation(() => { throw 'error' });
    const id = 1;
    const response = await request(app).get(`/users/${id}`);
    expect(response.status).toEqual(500);
  });

  it("test cannot post user", async () => {
    mockBuild.mockImplementation(() => { throw 'error' });
    const response = await request(app).post(`/users`);
    expect(response.status).toEqual(500);
  });
});
