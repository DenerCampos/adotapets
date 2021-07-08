const express = require('express');
const routes = require('./routes');
require('./app/database/index');

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3000);
