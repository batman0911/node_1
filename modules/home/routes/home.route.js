var router = require('express').Router();
const HomeController = require('../controller/home.controller')

router.get('/', HomeController.index);

module.exports = router;