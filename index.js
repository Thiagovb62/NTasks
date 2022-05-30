import express from "express";

const PORT = 4000;

const app = express();

app.get("/",(request,response) => response.json({status:'NTask API'}));

app.listen(PORT,() => console.log(`NTask API - porta ${PORT}`));