var router = require('express').Router();
const TestAPIController = require('../controller/test_api.controller')

router.get('/', TestAPIController.getEmployees);

module.exports = router;