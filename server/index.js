const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./src/routes/login.js');

app.use(cors());
app.use(express.json());

app.use('/', authRoutes);

app.listen(3001, () => {
  console.log('Corriendo en el puerto 3001');
});
