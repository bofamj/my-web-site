require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//*variables
const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const mile = process.env.RECIPIENT;
const user = process.env.GMAIL_USER;
const OAuth2 = google.auth.OAuth2;

//*nodemailer refresh token


//*oauth2 credentials
oauth2Client.setCredentials({ refresh_token: Refresh_Token });
const accessToken = oauth2Client.getAccessToken();

//*sending the main html page rout
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//*sending the email route
app.post("/", (req, response) => {
  console.log(req.body.email, req.body.message);

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <h2>Email: ${req.body.email}</h2>
    <p>Message: ${req.body.message}</p>
    `;
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: ,
      clientId:
       
      clientSecret: 
      refreshToken: Refresh_Token,
      accessToken: accessToken,
    },
  });

  const mailOpts = {
    from: ,
    to: ,
    subject: "New message from Nodemailer-contact-form",
    html: output,
  };
  console.log(req.body.email);
  smtpTrans.sendMail(mailOpts, (error, res) => {
    if (error) {
      console.log(error);
    } else {
      console.log(user, id, secret, mile);
      response.status(200).send("Successfully ");
    }
  });
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`app is listing in port${PORT}`);
});
