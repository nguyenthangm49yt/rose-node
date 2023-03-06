// Add Express
const express = require("express");
const path = require('path');
var cors = require('cors')
// Initialize Express
const app = express();
app.use(cors())

app.use('/', express.static(path.join(__dirname, "public")));
// Create GET request
app.get("/", (req, res) => {
  // loadMusic(res);
  res.sendFile(path.join(__dirname, '/index.html'));
});

const loadMusic = (res) => {
  res.sendFile(path.join(__dirname, '/public/music/I-Do-Duc-Phuc-911.mp3'));
}
// Initialize server
app.listen(3000, () => {
  console.log("Running on port 3000.");
});