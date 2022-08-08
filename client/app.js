const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/post", (req, res) => {
  console.log(req.body);
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`app is listing in port${PORT}`);
});
