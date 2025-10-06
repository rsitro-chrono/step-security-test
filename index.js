const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Dependabot Test Application Running');
});

app.get('/test-lodash', (req, res) => {
  const data = _.merge({}, { test: 'value' });
  res.json({ message: 'Lodash test', data });
});

app.get('/test-axios', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log('This project uses intentionally vulnerable dependencies for Dependabot testing');
});

