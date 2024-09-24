const userModel = require('../models/userModel')


module.exports.register = async (req, res) => {
    console.log(req.body)
    const user = await userModel.create(req.body)
    res.json(user)
}

module.exports.login = async (req, res) => {
    const isExist = await userModel.findOne({ username: req.body.username })
    if (isExist) {
        if (isExist.password === req.body.password) {
            console.log('login successfull')
            res.status(200).json({ message: "login successfull" })
        }
    }
}