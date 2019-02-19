const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const router = require('./router');

const app = express();
const port = process.env.PORT || config.apiPort;

mongoose.connect(config.dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;

db
  .once('open', () => console.log('connected to the database'))
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

if(process.env.NODE_ENV === 'production') {
  app
    .use(express.static(path.join(__dirname, 'client/build')))
    .get('*', (req, res) => res.sendfile(path.join(__dirname = 'client/build/index.html')))
}

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use('/api', router)
  .use(logger('dev'))
  .listen(port, () => console.log(`listening on port ${port}`));
