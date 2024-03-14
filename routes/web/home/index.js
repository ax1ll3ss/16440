const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');
// localhost:3000/ (get )
router.get('/', home_controller.index);

module.exports = router;