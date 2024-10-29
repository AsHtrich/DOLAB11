const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Again!!');
});

app.listen(PORT, () => {
  console.log(`Serverrunning on http://localhost:${PORT}`);
});