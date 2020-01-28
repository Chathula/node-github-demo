const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello World", () => {
    request(app).get("/").expect("Hello World");
  })
});
