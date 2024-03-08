const {BasketDevice} = require('../models/models')


class bascketController {
    async create(req, res) {
        const {deviceId, basketId} = req.body
        const basket = await BasketDevice.create({basketId, deviceId})
        return res.json(basket)

    }

    async getAll(req, res) {
        const basketsItem = await BasketDevice.findAll()
        return res.json(basketsItem)
    }

    async deleteItemBasck(req, res) {
        const {id} = req.body
        await BasketDevice.destroy({
            where: {
                id: id
            }
        })
        const allItem = await BasketDevice.findAll()
        return res.json(allItem)
    }
}

module.exports = new bascketController()
