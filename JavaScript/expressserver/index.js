const express = require('express');
const app = express();
const port = 3000;
const path=require('path')

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
//   res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
