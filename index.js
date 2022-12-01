/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const RouterApi = require('./routers');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('hola este es mi servidor web');
});

RouterApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('puerto: ' + PORT);
});
