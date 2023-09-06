const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`Hosted on server: ${hostname}\n`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
