// main server file
"use strict";

const express = require("express");

const bodyParser = require('body-parser');




 
const app = express();

// make all the files in 'public' available 
app.use(express.static("public"));

// if no file specified, return the main page
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/tiktok.html");
});

// a module that gets json out of the request body; not needed yet, but very useful!
app.use(express.json());

// gets text out of the HTTP body and into req.body; again not needed in this example
app.use(bodyParser.text());


// setting up express pipeline


// debugging
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
})


app.post("/videoData", function(req,res,next) {
  let choice = req.body; // user's choice
  console.log("responding",choice);
  res.send(choice);
})
app.use(function(req, res){ res.status(404); res.type('txt'); res.send('404 - File '+req.url+' not found'); });


// listening for HTTP requests
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});