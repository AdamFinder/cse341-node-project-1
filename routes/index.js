const express = require('express')
const router = express.Router();

router.use('/', require("./swagger"));
router.use('/recipes', require('./recipes'));

// @desc Login/Landing Page
// @route GET/
router.get('/', (req, res) =>{
    res.render('login')
})

// @desc Dashboard
// @route GET /dasboard
router.get('/dashboard', (req, res) =>{
    res.render('dashboard')
})

module.exports = router;