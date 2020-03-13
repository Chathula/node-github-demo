const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello World via Github Actions", (done) => {
    request(app).get("/").expect("Hello World via Github Actions", done);
  })
});
