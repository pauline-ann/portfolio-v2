// ----- Reactfolio Server -/

// ----- Dependencies -/
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

// ----- Init Express server -/
const app = express();

// Middleware; User parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----- Mount Router -/

// Test path for router
app.get('/ping', function (req, res) {
  return res.send('pong');
});

// Serve up static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname + '/client/build')));
  app.use(favicon(__dirname + '/client/build/favicon.ico'));

  // Define any API routes before this runs
  // Any requests that's not to the API...
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  })
}

// ----- Listen
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log('------------------------------------------------------------');
  console.log(`React portfolio application running on port ${port}...`);
});