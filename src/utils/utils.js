const bcrypt = require('bcryptjs');


exports.encryptString = (value) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                reject({ errorSalt: err.message });
            } else {
                bcrypt.hash(value, salt, function(err, hash) {
                    if (err) {
                        reject({ errorHash: err.message });
                    } else {
                        resolve(hash);
                    }
                });
            }
        });
    });
};


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

