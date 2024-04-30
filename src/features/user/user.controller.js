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

exports.register = async (req, res) => {
    /**
     * validation confirm password
     */
    console.log(`req body -> ${JSON.stringify(req.body, null, 2)}`)


    const requiredFields = ['firstName', 'lastName', 'email', 'password'] 

    const user = new User({
        firstName: req.body.firstName || undefined,
        lastName: req.body.lastName   || undefined,
        email: req.body.email || undefined,
        password: req.body.password || undefined,
        preferenceContact: req.body.preferenceContact || undefined,
        businessName: req.body.businessName   || undefined,
        address: req.body.address || undefined,
        documentType: req.body.documentType   || undefined,
        documentNumber: req.body.documentNumber   || undefined,
        description: req.body.description || undefined,
    })

    try {
        User.validateFields(user, requiredFields);

        const result = await User.create(user);

        return res.status(200).send({message: 'created successful!'})
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
}