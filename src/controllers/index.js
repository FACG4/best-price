const home = require('./home');
const women = require('./women');
const men = require('./men');
const details = require('./details');
const categories = require('./categories');
const router = require('express').Router();

router.get('/',home.disconutValue);
router.get('/details',details);
router.get('/categories',categories);
router.get('/women',women);
router.get('/men',men);
module.exports = router;
