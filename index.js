// importing node framework
const express = require("express");

const app = express();

// Respond with "Hello World via Github Actions" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World via Github Actions");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;
