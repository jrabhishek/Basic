const jwt = require('jsonwebtoken');
const generateToken=(email)=>{

  var token = jwt.sign({ email: email }, "key", { expiresIn: "2 days" });
  return token;

}
module.exports = generateToken;
