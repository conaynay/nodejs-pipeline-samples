const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

if (require.main === module) {
  app.listen(8080, () => console.log('Server ready'));
}

module.exports = app;
