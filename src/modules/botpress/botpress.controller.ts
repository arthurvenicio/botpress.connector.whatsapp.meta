import { Request, Response } from "express";
import { BotpressService } from "./botpress.service";

export class BotpressController {
  static async getHello(req: Request, res: Response) {
    return await BotpressService.getHello(req, res);
  }
}
