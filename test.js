const request = require("supertest");
const server = require("./index.js");

// api test
describe("GET /api/top", () => {
  it("responds with json", (done) => {
    request(server)
      .get("/api/top")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

// arbitrary route redirects to route test
describe("GET /frog/dog/log", () => {
  it("responds with index.html", (done) => {
    request(server)
      .get("/frog/dog/log")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});

// POST to non api is 403
describe("POST /", () => {
  it("forbids any non-api route post.", (done) => {
    request(server).post("/").expect(403, done);
  });
});

after(() => {
  server.close();
  process.exit();
});
