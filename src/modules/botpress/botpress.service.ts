import { Request, Response } from "express";

export class BotpressService {
  static async getHello(req: Request, res: Response) {
    return res.send("Hello World!");
  }
}
