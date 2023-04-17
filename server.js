const logger = require('./utils/logger');
const server = require('./index');

module.exports = server.listen(process.env.PORT_SERVER, () => {
  logger.info(`Listening on port ${process.env.PORT_SERVER}`);
  logger.info(`Running on '${process.env.ENVIRONMENT}' mode`);
});
