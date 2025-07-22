import express, { Application } from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    // Middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Configure CORS to allow requests from http://localhost:3001
    this.app.use(
      cors({
        origin: "http://localhost:3001",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
  }

  private routes(): void {
    this.app.use("/api", apiRoutes);
  }
}
