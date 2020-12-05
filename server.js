const express = require("express");
require("dotenv").config();
const dbContact = require("./Config/ConfigDB");

const app = express();

dbContact();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/contacts", require("./Routes/contacts"));

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
