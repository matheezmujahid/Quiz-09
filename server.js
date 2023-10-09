const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/say', (req, res) => {
  const { keyword } = req.query;
  const name = 'Matheez'; 
  const response = `${name} says ${keyword}`;
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
