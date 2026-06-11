const express = require('express');
const app = express();

const PORT = 3000;

// importar rutas
const indexRoutes = require('./routes/index');

app.use(express.json());

// usar rutas
app.use('/', indexRoutes);

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});