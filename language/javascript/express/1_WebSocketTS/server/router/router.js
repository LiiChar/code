const Router = require('express');
const chat = require('../data/data');
const router = new Router()

router.get('/log', (req, res) => {
    res.status(200).json({body: chat.users})
})
router.get('/reg', (req, res) => {
    res.status(200).json({body: chat.users})
})
router.get('/chat', (req, res) => {
    res.status(200).json({body: chat.users})
})

module.exports = router