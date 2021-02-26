const express = require("express");
// le path du fichier des variables d'environnement doit être spécifié ici
require('dotenv').config({path: './config/.env'});
const app= express();

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));
