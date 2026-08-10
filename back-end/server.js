require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./src/config/database');
const produitRoutes = require('./src/routes/produitRoutes');

connectToDatabase();
app.use(express.json());
app.use('/api', produitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur opérationnel sur http://localhost:${PORT}`);
});

