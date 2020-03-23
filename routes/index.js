var express = require('express');
var controller = require('../controllers/controller');

var router = express.Router();

/* GET home page. */
router.get('/', controller.index);

/* Send email form. */
router.post('/post', controller.send_email);

module.exports = router;