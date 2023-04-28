import { describe, test, expect } from "@jest/globals";
import { agent } from "supertest";
import app from "../../src/app";

describe("HealthcheckController tests", () => {
  test('getHealthcheck() should return "OK"', async () => {
    const server = agent(app);
    const response = await server.get("/health");

    expect(response.body.message).toBe("OK");
  });

  test("getHealthcheck() should return statusCode 200", async () => {
    const server = agent(app);
    const response = await server.get("/health");

    expect(response.statusCode).toBe(200);
  });
});
