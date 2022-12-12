import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
const cors = require("cors");

const { Client } = require("pg");

export const client = new Client({
  host: "localhost",
  port: 5433,
  user: "william",
  password: "963852",
  database: "teste",
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err: Error) => console.error("connection error", err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3030;

app.use(routes);
app.listen(port, () => console.log(`App listening on port ${port}`));
