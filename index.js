import express from "express";
import consign from "consign";
import routes from "./routes";

const PORT = 4000;

const app = express();

app.set("json spaces", 4);

consign().include("models").then("routes").into(app);

app.listen(PORT, () => {
  console.log(`Ntask API listening on port = ${PORT}`);
});
