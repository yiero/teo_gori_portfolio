const express = require('express');
const router = express.Router();
const classicCarCtrl = require('../controllers/classicCar');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, classicCarCtrl.get);
router.get('/:id', auth, classicCarCtrl.getOne);
router.post('/', auth, multer, classicCarCtrl.create);
router.delete('/:id', auth, classicCarCtrl.delete);

module.exports = router;