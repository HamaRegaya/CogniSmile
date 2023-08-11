const express = require('express');
const path = require('path');

const app = express();
const port = 3120;

app.use(express.static(path.join(__dirname, ''))); // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'your-html-file-name.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
