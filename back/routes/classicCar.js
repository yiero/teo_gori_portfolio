const express = require('express');
const router = express.Router();
const classicCarCtrl = require('../controllers/classicCar');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', classicCarCtrl.get);
router.get('/:id', classicCarCtrl.getOne);
router.post('/', auth, multer, classicCarCtrl.create);
router.delete('/:id', auth, classicCarCtrl.delete);
router.put('/:id', auth, multer, classicCarCtrl.update);

module.exports = router;