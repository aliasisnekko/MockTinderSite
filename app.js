const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const mailchimp = require('mailchimp');
const app = express();
app.use(express.static("publicFiles"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(process.env.PORT || 3000, function() {
    console.log("The server is being ran on port 3000");
})