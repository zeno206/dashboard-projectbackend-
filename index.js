const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

app.get('/api/shubham', (req, res) => {
  const data = ['react','node','mongo'];
  res.json(data);
});

app.listen(port, () => console.log(`Server running on ${port}`));
