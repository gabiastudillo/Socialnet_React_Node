const express = require('express');
const cors = require('cors');
const app = express();

//setttings
app.set('port', process.env.PORT||4000);

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/publicaciones', require('./routes/publicaciones'));
app.use('/api/productos',require('./routes/productos'));


module.exports = app;