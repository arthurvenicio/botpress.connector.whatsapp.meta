import express from "express";
import cors from "cors";
import { botPressRouter, healthRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(botPressRouter);
app.use(healthRouter);

export default app;
