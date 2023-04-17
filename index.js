const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const morgan = require('morgan');
const logger = require('./utils/logger');
const cors = require('./config/cors');
const apiErrorHandler = require('./error/api-error-handler');
// require('./database/models');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(cors);
app.use(express.json());
app.use(compression());
app.use(apiErrorHandler);

morgan.token('data', (req, res) => {
  // eslint-disable-next-line
  let body = 'body: {}';
  let query = 'query: {}';
  let params = 'params: {}';
  let cookies = 'cookies: {}';
  let ip = 'ip: {}';
  if (req.body && Object.keys(req.body).length > 0)
    // logger.info(`body: ${JSON.stringify(req.body)}`);
    body = `body: ${JSON.stringify(req.body)}`;
  // eslint-disable-next-line
  if (req.query && Object.keys(req.query).length > 0)
    query = `query: ${JSON.stringify(req.query)}`;
  // eslint-disable-next-line
  if (req.params && Object.keys(req.params).length > 0)
    params = `params: ${JSON.stringify(req.params)}`;

  if (req.originalUrl.includes('/api/checkout/')) {
    cookies = `cookies: ${JSON.stringify(req.cookies)}`;
  }

  ip =
    `ip_address: ${JSON.stringify(req.headers['x-forwarded-for'])}` ||
    `ip_address: ${JSON.stringify(req.socket.remoteAddress)}`;

  logger.info(`${body} - ${query} - ${params} - ${cookies} - ${ip}`);
});

app.use(
  morgan(':method :url :status :response-time ms - :res[content-length] :data'),
);

// app.use('/api', require('./routes'));

app.get('/', (req, res) => {
  try {
    res.status(200).send({ msg: 'API ONLINE 123' });
  } catch (error) {
    res.sendStatus(500);
  }
});

const httpServer = http.createServer(app);

module.exports = httpServer;
