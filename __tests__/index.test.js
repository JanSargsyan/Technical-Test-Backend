import request from "supertest";
import app from "../index.ts";

describe("GET /artist", () => {
  describe("given a valid search string return results", () => {
    test("should return an array of results", async () => {
      const response = await request(app).get("/artist/beyonce");
      expect(response.body.data.length >= 1).toBe(true);
    });

    test("should have a 200 status code", async () => {
      const response = await request(app).get("/artist/beyonce");
      expect(response.statusCode).toBe(200);
    });
    test("should have json as the content-type", async () => {
      const response = await request(app).get("/artist/beyonce");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("given an invalid search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/artist/!+.?");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/artist/!+.?");
      expect(response.statusCode).toBe(204);
    });
  });

  describe("given an empty search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/artist/");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/artist/");
      expect(response.statusCode).toBe(204);
    });
  });
});

describe("GET /album", () => {
  describe("given a valid search string return results", () => {
    test("should return an array of results", async () => {
      const response = await request(app).get("/album/beyonce");
      expect(response.body.data.length >= 1).toBe(true);
    });

    test("should have a 200 status code", async () => {
      const response = await request(app).get("/album/beyonce");
      expect(response.statusCode).toBe(200);
    });
    test("should have json as the content-type", async () => {
      const response = await request(app).get("/album/beyonce");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("given an invalid search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/album/!+.?");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/album/!+.?");
      expect(response.statusCode).toBe(204);
    });
  });

  describe("given an empty search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/album/");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/album/");
      expect(response.statusCode).toBe(204);
    });
  });
});

describe("GET /song", () => {
  describe("given a valid search string return results", () => {
    test("should return an array of results", async () => {
      const response = await request(app).get("/song/beyonce");
      expect(response.body.data.length >= 1).toBe(true);
    });

    test("should have a 200 status code", async () => {
      const response = await request(app).get("/song/beyonce");
      expect(response.statusCode).toBe(200);
    });
    test("should have json as the content-type", async () => {
      const response = await request(app).get("/song/beyonce");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("given an invalid search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/song/!+.?");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/song/!+.?");
      expect(response.statusCode).toBe(204);
    });
  });

  describe("given an empty search string returns nothing with 204 status", () => {
    test("should not return any data", async () => {
      const response = await request(app).get("/song/");
      expect(response.body.data).toBe(undefined);
    });
    test("should return 204 status", async () => {
      const response = await request(app).get("/song/");
      expect(response.statusCode).toBe(204);
    });
  });
});
