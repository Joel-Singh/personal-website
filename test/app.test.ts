import app from "../app";
import request from "supertest";

describe("App start test", () => {
  it("should start app without crash", async () => {
    const res = await request(app).get("/");
    expect(res.status).toEqual(200);
  });
});
