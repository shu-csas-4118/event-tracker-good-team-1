const crypto = require('crypto');

exports.hash = function(key){
  const hash = crypto.createHash('sha256');
  hash.update(key);
  return hash.digest('hex');
};
