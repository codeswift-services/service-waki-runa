const User = require("../../core/datasource/user/user.model")


exports.login = (req, res) => {
    /**
     * validate have body
     */
    if(!res.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }
}

exports.register = (req, res) => {
    /**
     * validate have body
     */
    if(!res.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    /**
     * validation confirm password
     */
    console.log(req.body)

    const user = new User({
        fistName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        preferenceContact: req.body.preferenceContact,
        businessName: req.body.businessName,
        address: req.body.address,
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        description: req.body.description,
    })

    User.create(user,(err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'error'
            })
        } else {
            res.send(data)
        }
    })
}