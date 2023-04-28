import { Request, Response } from "express";

export class HealthcheckController {
  static getHealthcheck(req: Request, res: Response) {
    let status = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };

    try {
      return res.send(status);
    } catch (error) {
      status.message = error as string;
      return res.status(503).send(status);
    }
  }
}
