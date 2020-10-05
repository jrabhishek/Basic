const jwt = require("jsonwebtoken");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhQGdtYWlsLmNvbSIsImlhdCI6MTYwMTg5NDgxNSwiZXhwIjoxNjAyMDY3NjE1fQ._tZqtuMeImnyb1CML85xlJ3gu-erw9ONrZOlXHYXA84";
const decode= jwt.verify(token, "key", {expiresIn: "2 days"});
console.log(Math.floor(Date.now()/1000));
