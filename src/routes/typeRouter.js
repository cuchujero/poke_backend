const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');
const {requestAuthorization} = require('../middlewares/authorizationRequestMw');

router.get('/:id?', requestAuthorization, typeController.getTypes);

module.exports = router;