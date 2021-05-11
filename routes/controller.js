// on crée une instance de Router() pour gérer les routes redirigées depuis l'app
const express = require('express');
const router = express.Router();

// NOTE : il faut déclarer req même si on ne l'utilise pas (il manquerait un param)
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Prochains objectifs de développement du site'});
});


// on crée une route qui va rediriger en fonction du paramêtre qui lui sera envoyer dans la requête
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.render('index.html', {title: req.params.id});
});

router.get('/foo', (req, res) => {
    res.render('foo.html', {title: 'Foo page'});
});

// on définit router comme module et on l'exporte pour le rendre disponible dans index.js
module.exports = router;

// 'Prochains objectifs de développement du site'