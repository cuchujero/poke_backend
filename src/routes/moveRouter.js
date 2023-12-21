const express = require('express');
const router = express.Router();
const moveController = require('../controllers/moveController');
const {requestAuthorization} = require('../middlewares/authorizationRequestMw');

router.get('/:id?', requestAuthorization, moveController.getMoves);

module.exports = router;