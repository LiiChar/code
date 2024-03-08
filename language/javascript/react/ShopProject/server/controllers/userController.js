const ApiError = require('../error/ApiError');
const {User, Basket} = require('../models/models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const generateJWT = (id, email, role) => {
    return jsonwebtoken.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        console.log(req.body);
        if(!email || !password) {
            return next(ApiError.badRequest('Некоректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: User.id})
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.Internal('Пользователь с таким именем не найден'))
        }

        let cpmparePassword = bcrypt.compareSync(password, user.password)
        if (!cpmparePassword) {
            return next(ApiError.Internal('Указан неверный пароль'))
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.password, req.user.role)
        return res.json({token})
    }

    async deleteUser(req, res) {
        const {id} = req.body
        if (!id) {
            return next(ApiError.badRequest('Такого id нет'))
        }
        await User.destroy({
            where: {
                id: id
            }
        })
        const users = await Type.findAll()
        return res.json(users)
    }
}

module.exports = new UserController();
