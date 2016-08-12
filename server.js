const express = require('express');

const app = express();
const port = 9000;

app.use('/static', express.static('build/static'));

app.use(function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`The optimized production build is running at http://localhost:${port}`);
  }
});
