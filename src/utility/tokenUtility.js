const jwt = require("jsonwebtoken");
const { JWT_KEY, JWT_EXPIRE_TIME } = require("../config");

const TokenEncode = (email, user_id) => {
  const KEY = JWT_KEY;
  const EXPIRE = { expiresIn: JWT_EXPIRE_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  const token = jwt.sign(PAYLOAD, KEY, EXPIRE);
 
  
  return token;
};

const TokenDecode =  (token) => {
    try {
      return jwt.verify(token, JWT_KEY);
    } catch (e) {
      return null;
    }
};
module.exports = { TokenDecode, TokenEncode };
