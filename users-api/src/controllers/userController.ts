import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  public static getUsers(req: Request, res: Response): void {
    try {
      const users = UserService.generateUsers(10);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error generating users:", error);
      res.status(500).json({ error: "Failed to generate users" });
    }
  }
}
