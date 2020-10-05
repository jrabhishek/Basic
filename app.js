const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const registerRoute = require('./routes/register');
const login = require('./routes/login');
const greet = require('./routes/greet');
const validateToken = require('./middleware/validateToken');
const logout = require('./routes/logout');


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    next();
});
app.use('/register',registerRoute);
app.use('/login',login);
app.use('/greet',validateToken,greet);
app.use('/logout',validateToken,logout);
app.use((req, res, next) => {
    res.status(200);
    res.json({
        message: "hit the wrong url. Available url are /register /login /logout /greet  "

    })

});
module.exports = app;
