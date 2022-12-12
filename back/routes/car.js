const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/car');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, carCtrl.get);
router.get('/:id', auth, carCtrl.getOne);
router.post('/', auth, multer, carCtrl.create);
router.delete('/:id', auth, carCtrl.delete);

module.exports = router;