const http = require('http');
const app = require('./app');
const database = require('./util/database');
const port = process.env.PORT || 3000;


const server = http.createServer(app);
console.log(port);
database.sync().then(()=>{
            server.listen(port);
}).catch((err)=>{
                 console.log(err);
});
