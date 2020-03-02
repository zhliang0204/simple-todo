const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const cors = require('cors');

const routes = require('./config/routes');
const dbService = require('./service/db.service');

const port = process.env.PORT || 5000;

const app = express();
const server = http.Server(app);
const mappedRoutes = mapRoutes(routes, 'controller/');
const DB = dbService().startDB();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false
  })
);

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', mappedRoutes);

server.listen(port, () => {
  console.log(`Started listening to port ${port}.`);
  return DB;
});

module.exports = app;
