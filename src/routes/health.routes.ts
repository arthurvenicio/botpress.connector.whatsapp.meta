import { Router } from "express";
import { HealthcheckController } from "../modules/healthcheck/healthcheck.controller";

const healthRouter = Router();

healthRouter.get("/health", HealthcheckController.getHealthcheck);

export { healthRouter };
