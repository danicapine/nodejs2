const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
router.get('/abouts', con.abouts);
router.get('/products', con.products);
router.get('/blog', con.blog);
router.get('/contacts', con.contacts);
module.exports = router;