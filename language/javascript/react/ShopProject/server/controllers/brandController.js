const {Brands} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const { name } = req.body
        const brand = await Brands.create({ name })
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brands.findAll()
        return res.json(brands)
    }

    async deleteBrand(req, res) {
        const { id } = req.body
        if (!id) {
            return next(ApiError.badRequest('Такого id нет'))
        }
        Brands.destroy({
            where: {
                id: id
            }
        })
        const brands = await Brands.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController();
