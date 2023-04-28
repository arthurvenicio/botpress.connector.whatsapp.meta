import { Router } from "express";
import { BotpressController } from "../modules/botpress/botpress.controller";

const botPressRouter = Router();

botPressRouter.get("/botpress/hello", BotpressController.getHello);

export { botPressRouter };
