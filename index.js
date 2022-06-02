import express from "express";
import consign from "consign";
import routes from "./routes";

const app = express();

consign()
.include("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
