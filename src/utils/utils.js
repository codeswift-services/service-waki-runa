const bcrypt = require('bcrypt')

exports.encryptString = (value) => {
    bcrypt
        .genSalt(10) // TODO: CHANGE SALT
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .then(hash => {
            return hash
        })
        .catch(err => console.error(err.message))
}


exports.generateId = () => {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  const oid = timestamp + 'xxxxxxxxxxxxxxxx'
    .replace(/[x]/g, _ => (Math.random() * 16 | 0).toString(16))
    .toLowerCase();

  return oid;
}

exports.verifiedDocFields = (doc, requireFields) => {
    for (let keys of requireFields) {
        if (!doc.hasOwnProperty(campo) || doc[campo] === null || doc[campo] === undefined) {
            return false;
        }
    }
    return true;
}

