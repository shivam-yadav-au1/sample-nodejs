const http = require('http');
const express = require('express');
const app = express();




const PORT = process.env.PORT || 3000 ;

console.log('PORT',PORT);

app.get('/',(req,res)=> res.send(`Hello world from node server with CI/CD V2 ${req.socket.remoteAddress} on port : ${PORT}`));
app.get('/hello',(req,res)=> res.send(`Hello world from node server with CI/CD V2 ${req.socket.remoteAddress} on port : ${PORT}`));


app.listen(PORT,()=>{
  console.log(`Example app listening at http://localhost:${PORT}`);
})