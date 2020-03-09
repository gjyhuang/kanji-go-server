const express = require('express');
const app = express();
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const PORT = process.env.PORT || 1337;
const dbStore = new SequelizeStore({ db: db });

module.exports = app;

const createApp = () => {
  // Logging middleware //
  app.use(morgan('dev'));
  // Body-parsing middleware //
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // Static file serving middleware. Uncomment this when ready.
  // app.use(express.static(path.join(__dirname, './path/to/static/assets')));

  // Sends our index.html. Uncomment when ready.
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/index.html'));
  // });

  // Session middleware //
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
      store: sessionStorage,
      resave: false,
      saveUninitialized: false,
    })
  );

  // Error handling middleware //
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // Start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

const syncDb = () => db.sync();

async function bootApp() {
  await sessionStore.sync();
  await syncDb();
  await createApp();
  await startListening();
}

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
