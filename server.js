const express = require("express");

// on  importe nunjucks pour le rendu
const nunjucks = require('nunjucks');

// le path du fichier des variables d'environnement doit être spécifié ici
require('dotenv').config({path: './config/.env'});

// on crée une instance d'Express
const app= express();

// on importe le module router
const pageRouter = require('./routes/controller');

// on configure nunjucks comme modèle de rendu pour /views et lui passe app en param
nunjucks.configure('views', {
    autoescape: true, 
    express: app
});


// middleware qui configure le répertoire des fichiers statiques (img, css, js)
// NOTE : le path dans les fichiers html DOIT en tenir compte pour le compléter
// ex : adapter : href="../public/css/base.css"> pour ceci : href="/css/base.css"
app.use(express.static(__dirname + '/public'));

// on définit un middleware pour configurer la racine du router
app.use('/', pageRouter);

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));
