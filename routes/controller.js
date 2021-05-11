// on crée une instance de Router() pour gérer les routes redirigées depuis l'app
const express = require('express');
const router = express.Router();

// NOTE : il faut déclarer req même si on ne l'utilise pas (il manquerait un param)
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Main page'});
});

router.get('/foo', (req, res) => {
    res.render('foo.html', {title: 'Foo page'});
});

// on définit router comme module et on l'exporte pour le rendre disponible dans index.js
module.exports = router;