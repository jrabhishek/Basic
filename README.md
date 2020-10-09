## Available Scripts
### `npm install`
install all the  dependencies
### `npm start`
Runs the server in the development mode.<br />
At url [http://localhost:3000](http://localhost:3000) 
### Api Endpoints
#### Root url [https://basic-node-app.herokuapp.com/](https://basic-node-app.herokuapp.com/)

## ` POST /register`
```
Sampler request
POST https://basic-node-app.herokuapp.com/register
Headers:[Content-Type:application/json]
body:{
         "name":"Abhishekj raj",
         "email":"jrabhishek@gmail.com",
         "password":"abhishek"
         
     }

responce:
{
    "message": "registration successful"
}
```
## ` POST /login`
```
Sample request
POST https://basic-node-app.herokuapp.com/login
Headers:[Content-Type:application/json]
body:{
         "email":"jrabhishek@gmail.com",
         "password":"abhishek"         
     }

responce:
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImExYUBnbWFpbC5jb20iLCJpYXQiOjE2MDIyNDc0OTEsImV4cCI6MTYwMjQyMDI5MX0.6MMtdcuOiV8-NEnbhWSFquQh7YBWITJ4Fr_13rsq5OM"
}
```
## ` GET /greet`
```
sample request
GET https://basic-node-app.herokuapp.com/greet
Headers:[Authorization:Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImExYUBnbWFpbC5jb20iLCJpYXQiOjE2MDE5MDk3MjAsImV4cCI6MTYwMjA4MjUyMH0.flhHl8XYfzPLeWrMxDh7QkMmM44AdlJbpisuvazdc4c]

responce:
{
    "message": "Hi Abhishek"
}
```

## ` GET /logout`
```
sample request
GET https://basic-node-app.herokuapp.com/logout
Headers:[Authorization:Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImExYUBnbWFpbC5jb20iLCJpYXQiOjE2MDE5MDk3MjAsImV4cCI6MTYwMjA4MjUyMH0.flhHl8XYfzPLeWrMxDh7QkMmM44AdlJbpisuvazdc4c]

responce:
{
    "message": "successfully logout"
}
```



