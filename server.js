const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bonjour depuis Node.js 🚀</h1>');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT} (https://dirty.codes)`);
});