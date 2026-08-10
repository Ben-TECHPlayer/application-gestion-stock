const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

router.get('/produits', produitController.getProduits);

router.post('/produits', produitController.createProduit);

module.exports = router;