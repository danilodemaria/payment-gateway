const cors = require('cors');

module.exports = cors({
  credentials: true,
  exposedHeaders: ['Content-Disposition'],
  origin: (origin, cb) => {
    cb(null, true);
  },
});
