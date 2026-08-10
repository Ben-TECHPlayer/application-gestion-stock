const Produit = require('../models/Produit');

exports.getProduits = async (req, res) => {
    try {
        const produits = await Produit.find();
        res.json(produits);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
};

exports.createProduit = async (req, res) => {
    try {
        const { nom, categorie, reference, description, quantite, seuil, dateMiseAJour } = req.body;
        const nouveauProduit = await Produit.create({ nom, categorie, reference, description, quantite, seuil, dateMiseAJour });
        res.status(201).json(nouveauProduit);
    } catch (error) {
        res.status(400).json({ error: 'Impossible de créer un produit' });
    }
};