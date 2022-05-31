import express from "express";
import consign from "consign";

const PORT = 4000;

const app = express();

app.set("json spaces", 4);

consign().include("routes").into(app);

app.listen(PORT, () => {
  console.log(`Ntask API listening on port = ${PORT}`);
});
