const express  = require('express');
const path     = require('path');

const port     = process.env.PORT || 3030;
const dist     = path.resolve(__dirname, '../dist');
const mocks    = require('./mocks');

const app      = express();

app.use(express.static(dist));

app.get('/data', (req, res) => {
   res.json({
      pros: getRandomData(mocks),
      cons: getRandomData(mocks)
   });
});

function getRandomData(mock) {
   const count = Math.random() * 10 | 0;
   return Array(count).fill(0).map((r) => {
      const index = Math.random() * (mock.length - 1) | 0;
      return {
         text: mock[index],
         value: Math.random() * 10 | 0
      };
   });
}

app.listen(port);
console.log('Server is running...', 'OK');