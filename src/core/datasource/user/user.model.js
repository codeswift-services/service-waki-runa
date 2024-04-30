const pool = require('../../database/mysql') 
const utils = require('../../../utils/utils') 

const User = function(user) {
    this.id = utils.generateId()
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.password = user.password,
    this.preferenceContact = user.preferenceContact || null ,
    this.businessName = user.businessName || null ,
    this.address = user.address || null ,
    this.documentType = !!user.documentNumber ? "RUC" : null, // siempre ruc para empresa
    this.documentNumber = user.documentNumber || null ,
    this.description = user.description || null
} 

User.validateFields = (user, requiredFields) => {
    for (const field of requiredFields) {
        if (!user[field]) {
            throw new Error(`El campo ${field} es requerido.`);
        }
    }
} 

User.create = async (newUser) => {
    newUser.password = await utils.encryptString(newUser.password)
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO users SET ? ", newUser, (err, res) =>  {
            if(err) {reject(err)}
            else {resolve({ id: res.insertId || undefined, ...newUser })}
        })
    })
}

module.exports = User;