import request from "supertest";
import App from "../../app";
import { User } from "../../types/user";

describe("API Routes Integration Tests", () => {
  // Create a new instance of the app for testing
  const app = new App().app;

  describe("GET /api/users", () => {
    it("should return 200 and an array of 10 users", async () => {
      const response = await request(app).get("/api/users");

      // Check status code
      expect(response.status).toBe(200);

      // Check that we received an array of 10 users
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(10);

      // Check the structure of the first user in the array
      const firstUser = response.body[0] as User;
      expect(firstUser).toHaveProperty("id");
      expect(firstUser).toHaveProperty("name");
      expect(firstUser).toHaveProperty("username");
      expect(firstUser).toHaveProperty("email");
      expect(firstUser).toHaveProperty("role");
    });

    it("should return users with the correct data types", async () => {
      const response = await request(app).get("/api/users");

      // Get the users from the response
      const users = response.body as User[];

      // Check each user in the array
      users.forEach((user) => {
        expect(typeof user.id).toBe("string");
        expect(typeof user.name).toBe("string");
        expect(typeof user.username).toBe("string");
        expect(typeof user.email).toBe("string");
        expect(typeof user.role).toBe("string");

        // Email should contain @ symbol
        expect(user.email).toContain("@");

        // Role should be one of the allowed values
        expect(["admin", "user", "editor", "viewer"]).toContain(user.role);
      });
    });

    it("should return valid JSON with the correct content type", async () => {
      const response = await request(app).get("/api/users");

      // Check content type header
      expect(response.headers["content-type"]).toContain("application/json");

      // Verify we can parse the body as JSON
      expect(() => JSON.parse(JSON.stringify(response.body))).not.toThrow();
    });
  });

  describe("API Error Handling", () => {
    it("should return 404 for non-existent routes", async () => {
      const response = await request(app).get("/api/nonexistent");
      expect(response.status).toBe(404);
    });
  });
});
