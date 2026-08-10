const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    reference: { type: String, required: true, unique: true },
    categorie: { type: String, required: true },
    description: { type: String, required: true },
    quantite: { type: Number, required: true, min: 0 },
    seuil: { type: Number, required: true, min: 0 },
    dateMiseAJour: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Produit', produitSchema);