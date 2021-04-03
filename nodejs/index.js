const express = require('express');

const app = express();

app.get('/staj', (req, res) => {
  res.send('Hello World from Node.JS!');
});

app.listen(5555, () => {
  console.log('Listening on port 5555');
});
