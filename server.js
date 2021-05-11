const express = require("express");

// on  importe nunjucks
const nunjucks = require('nunjucks');

// le path du fichier des variables d'environnement doit être spécifié ici
require('dotenv').config({path: './config/.env'});

const app= express();

// on configure nunjucks comme modèle de rendu pour /views et lui passe app en param
nunjucks.configure('views', {
    autoescape: true, 
    express: app
});

// NOTE : il faut déclarer req même si on ne l'utilise pas (il manquerait un param)
app.get('/', (req, res) => {
    res.render('index.html', {title: 'Main page'});
});

app.get('/foo', (req, res) => {
    res.render('foo.html', {title: 'Foo page'});
});

app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`));
