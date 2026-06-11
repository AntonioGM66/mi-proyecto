const express = require('express');
const router = express.Router();

// ruta de prueba
router.get('/', (req, res) => {
res.send('Ruta funcionando correctamente 🚀');
});

module.exports = router;