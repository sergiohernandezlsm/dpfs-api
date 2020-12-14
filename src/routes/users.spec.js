const express = require("express");
const router = require("./users");
const request = require("supertest");
const models = require("../database/models");

jest.mock("../database/models");
const mockUserFindAll = models.user.findAll;
const mockUserFindByPk = models.user.findByPk;
const mockBuild = models.user.build;
const mockSave = jest.fn();
const mockToJson = jest.fn();
const mockDestroy = jest.fn();
const mockUpdate = jest.fn();

const createMockInstance = () => ({
  save: mockSave,
  destroy: mockDestroy,
  toJSON: mockToJson,
  update: mockUpdate,
});

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
  mockUserFindByPk.mockImplementation(createMockInstance);
  mockBuild.mockImplementation(createMockInstance);
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

  it("test can post user", async () => {
    const response = await request(app).post(`/users`).send({
      firstName: "sergiosssss",
      lastName: "JAJA",
      email: "Esperanza_Padberg@hotmail.com",
    });
    expect(mockBuild).toHaveBeenCalledWith({
      firstName: "sergiosssss",
      lastName: "JAJA",
      email: "Esperanza_Padberg@hotmail.com",
    });
    expect(response.status).toEqual(200);
  });

  it("test can patch user", async () => {
    const newPatch = { firstName: "new name" };
    const id = 3;
    mockToJson.mockImplementation(() => mockUser);
    const response = await request(app).patch(`/users/${id}`).send(newPatch);
    expect(response.status).toEqual(200);
    console.log(mockToJson)
  });

  it("test cannot patch user", async () => {
    const newPatch = { firstName: "new name" };
    const id = 3;
    mockToJson.mockImplementation(() => { throw 'error' });
    const response = await request(app).patch(`/users/${id}`).send(newPatch);
    expect(response.status).toEqual(500);
  });

  it("test can delete user", async () => {
    const id = 3;
    mockToJson.mockImplementation(() => mockUser);
    const response = await request(app).delete(`/users/${id}`);
    expect(response.status).toEqual(200);
  });

  it("test cannot delete user", async () => {
    const id = 3;
    mockUserFindByPk.mockImplementation(() => { throw 'error' });
    const response = await request(app).delete(`/users/${id}`);
    expect(response.status).toEqual(500);
  });
});
