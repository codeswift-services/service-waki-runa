
module.exports = app => {
    const User = require("./user.controller")

    const router = require('express').Router()

    router.post("/register", User.register)

    app.use('/v1/user', router)
}