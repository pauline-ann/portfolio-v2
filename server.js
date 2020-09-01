// ----- Reactfolio Server -/

// ----- Dependencies -/
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

// ----- Setup -/

// Server Port
const port = process.env.PORT || 9000;
const app = express();

// Serve up static assets
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// User parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----- Mount Router -/

app.get('/ping', function (req, res) {
  return res.send('pong');
});

// Define any API routes before this runs
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ----- Listen
app.listen(port, () => {
  console.log('------------------------------------------------------------');
  console.log(`React portfolio application running on port ${port}...`);
});