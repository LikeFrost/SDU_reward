
import sortObject from 'sort-object';

const crypto = require('crypto');

const hash = (method, s, format) => {
  const sum = crypto.createHash(method);
  const isBuffer = Buffer.isBuffer(s);
  if (!isBuffer && typeof s === 'object') {
    s = JSON.stringify(sortObject(s));
  }
  sum.update(s, isBuffer ? 'binary' : 'utf8');
  return sum.digest(format || 'hex');
};

const md5 = (s, format) => {
  return hash('md5', s, format);
};
export default md5;
