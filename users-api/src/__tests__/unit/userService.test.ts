import { UserService } from "../../services/userService";
import { User } from "../../types/user";

describe("UserService", () => {
  describe("generateUsers", () => {
    it("should generate the correct number of users", () => {
      const userCount = 5;
      const users = UserService.generateUsers(userCount);
      expect(users).toHaveLength(userCount);
    });

    it("should generate users with the correct interface", () => {
      const users = UserService.generateUsers(1);
      const user = users[0];

      // Check that all required properties exist
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("role");

      // Check that properties have the correct types
      expect(typeof user.id).toBe("string");
      expect(typeof user.name).toBe("string");
      expect(typeof user.username).toBe("string");
      expect(typeof user.email).toBe("string");
      expect(typeof user.role).toBe("string");
    });

    it("should generate users with valid roles", () => {
      const validRoles = ["admin", "user", "editor", "viewer"];
      const users = UserService.generateUsers(10);

      users.forEach((user) => {
        expect(validRoles).toContain(user.role);
      });
    });

    it("should generate unique IDs for each user", () => {
      const userCount = 50; // Generate a significant number of users
      const users = UserService.generateUsers(userCount);

      // Extract all IDs
      const ids = users.map((user) => user.id);

      // Create a Set which automatically removes duplicates
      const uniqueIds = new Set(ids);

      // If all IDs are unique, the Set size should equal the original array length
      expect(uniqueIds.size).toBe(userCount);
    });

    it("should return an empty array when count is 0", () => {
      const users = UserService.generateUsers(0);
      expect(users).toEqual([]);
    });
  });
});
