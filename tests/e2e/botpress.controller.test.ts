import { describe, test, expect } from "@jest/globals";
import { agent } from "supertest";
import app from "../../src/app";

describe("BotpressController tests", () => {
  test.todo('getHello() should return "Hello World!"');

  test("getHello() should return statusCode 200", async () => {
    const server = agent(app);
    const response = await server.get("/botpress/hello");

    expect(response.statusCode).toBe(200);
  });
});
