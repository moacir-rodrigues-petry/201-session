import { Request, Response } from "express";
import { UserController } from "../../controllers/userController";
import { UserService } from "../../services/userService";
import { User } from "../../types/user";

// Mock the UserService
jest.mock("../../services/userService");

describe("UserController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseJson: jest.Mock;
  let responseStatus: jest.Mock;

  beforeEach(() => {
    // Reset our mocks before each test
    jest.clearAllMocks();

    // Mock response methods
    responseJson = jest.fn();
    responseStatus = jest.fn().mockReturnValue({ json: responseJson });

    // Create mock request and response objects
    mockRequest = {};
    mockResponse = {
      status: responseStatus,
      json: responseJson,
    };
  });

  describe("getUsers", () => {
    it("should return 200 status code and an array of users", () => {
      // Mock data
      const mockUsers: User[] = [
        {
          id: "1",
          name: "Test User",
          username: "testuser",
          email: "test@example.com",
          role: "user",
        },
      ];

      // Set up the UserService mock to return our mock data
      (UserService.generateUsers as jest.Mock).mockReturnValue(mockUsers);

      // Call the controller method
      UserController.getUsers(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(UserService.generateUsers).toHaveBeenCalledWith(10);
      expect(responseStatus).toHaveBeenCalledWith(200);
      expect(responseJson).toHaveBeenCalledWith(mockUsers);
    });

    it("should handle errors and return 500 status code", () => {
      // Set up the UserService mock to throw an error
      const errorMessage = "Test error";
      (UserService.generateUsers as jest.Mock).mockImplementation(() => {
        throw new Error(errorMessage);
      });

      // Mock console.error to prevent actual logging during tests
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      // Call the controller method
      UserController.getUsers(mockRequest as Request, mockResponse as Response);

      // Assertions
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(responseStatus).toHaveBeenCalledWith(500);
      expect(responseJson).toHaveBeenCalledWith({
        error: "Failed to generate users",
      });

      // Restore console.error
      consoleErrorSpy.mockRestore();
    });
  });
});
