const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const { nextTick } = require('process');
const ApiError = require('../error/ApiError')
const fs = 'fs';
const UserController = './userController.js'

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            // console.log(req.body);
            let {img} = req.files
            let fileName = uuid.v4() +'.jpeg'
            img.mv(path.resolve(__dirname, "../", 'static/' ,fileName))


            let device = await Device.create({name, price, brandId, typeId, img: fileName})
            

            if (info) {
                info = JSON.parse(info)
                info.forEach(element => {
                    console.log();
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                });
            }

    
    
            return res.json(device)
        } catch (e) {
            nextTick(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        let devices;
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if(brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }
    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
        {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
        })
        return res.json(device)
    }

    async deleteDevice(req, res) {
        const {id} = req.body
        const img = await Device.findOne({where: {id}})
        // fs.rm(path.resolve(__dirname, '../', 'static/', img.img), { recursive:true }, (err) => {
        //     if(err){
        //         console.error(err.message);
        //         return;
        //     }
        // })
        if (!id) {
            return next(ApiError.badRequest('Такого id нет'))
        }
        await Device.destroy({
            where: {
                id: id
            }
        })

        const devices = await Device.findAll()
        return res.json(devices)
    }
}

module.exports = new DeviceController();
