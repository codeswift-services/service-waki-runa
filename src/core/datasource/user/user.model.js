const pool = require('../../database/mysql') 
const utils = require('../../../utils/utils') 

const User = function(user) {
    this.id = utils.generateId()
    this.fistName = user.firsName
    this.lastName = user.lastName
    this.email = user.email
    this.password = utils.encryptString(user.password),
    this.preferenceContact = user.preferenceContact || null ,
    this.businessName = user.businessName || null ,
    this.address = user.address || null ,
    this.documentType = !!user.documentNumber ? "RUC" : null, // siempre ruc para empresa
    this.documentNumber = user.documentNumber || null ,
    this.description = user.description || null
} 


User.create = (newUser, result) => {
    pool.query("INSERT INTO users SET ? ", newUser, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null)
            return; 
        }

        console.log("created user: ", { id: res.insertId, ...newUser });

        result(null, { id: res.insertId, ...newUser });
    } )
}

module.exports = User;