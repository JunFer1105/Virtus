const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola que hace');
})

module.exports = router;
