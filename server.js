const express = require("express");
const path = require("path");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// File will go here
app.use(
  cors({
    origin: "*", // This allows all origins
  })
);

app.use(express.static(__dirname + "/src/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});


app.listen(port);
console.log("Server started at http://localhost:" + port);
