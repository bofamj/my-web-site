const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

/* oauth2Client.setCredentials({ refresh_token: process.env.Refresh_Token });
const accessToken = oauth2Client.getAccessToken(); */

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  /* const output=`
    <p>You have a new contact request</p>
    <img class="email" src="cid:email" alt="email-image">
    <h3>Contact details</h3>
    <ul>
    <li>FirstName: ${req.body.name}</li>
    <li>TelNum: ${req.body.telephone}</li>
    <li>Email: ${req.body.email}</li>
    <li>Message: ${req.body.message}</li>
    </ul>`
  const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
    auth:{
    type:"OAuth2",
    user:process.env.GMAIL_USER,
    clientId:process.env.Client_ID,
    clientSecret:process.env.Client_Secret,
    refreshToken:process.env.Refresh_Token,
    accessToken:accessToken
    }})
  const mailOpts = {
    from:process.env.GMAIL_USER,
    to:process.env.RECIPIENT,
    subject:'New message from Nodemailer-contact-form',
    html:output,
    attachments: [{
    filename: 'email.jpg',
    path:__dirname + '/public/images/email.jpg',cid: 'email' //same cid value as in the html img src
    }]}
  smtpTrans.sendMail(mailOpts,(error,res)=>{
     if(error){
     console.log(error);
     }
     else{
      console.log("Message sent: " + res.message);
      response.status(200).send(200)
      }
  
     }) */
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`app is listing in port${PORT}`);
});

//clint id = 754540055745-dk295k74uv341ntkmfp7lk2llsu0d6pj.apps.googleusercontent.com
//clint secrit = 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
// refrich token = 1//04aA8QTWDCUB9CgYIARAAGAQSNwF-L9IrYxiCX7rbZE0MDRGiXVv4q3DDDOseElzciUWCMkZx4B0j7X_rBElHOpBJSERm0vLF5rA
// acces token = ya29.A0AVA9y1tc0-Wo8PNcHdqZ0paVxvj8NanP0nKT5dvQ_F7oWeX1XVm0boALs2gqjgt4oTe9A7FvFzc6ZyyG5Zz1R5M2LZeWLUg27XxrJ8XcRku0C4CK68UyHbnsEhkVxMrafUpozTYvUBns9EE5Mhqa6Rli-dwfaCgYKATASATASFQE65dr8zlouQubyPx7wUsKMTNxZBw0163
