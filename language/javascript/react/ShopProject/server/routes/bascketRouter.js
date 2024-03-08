const Router = require('express');
const router = new Router()
const bascketController = require('../controllers/basketController');

router.post('/', bascketController.create)
router.get('/', bascketController.getAll)
router.delete('/', bascketController.deleteItemBasck)

module.exports = router ;