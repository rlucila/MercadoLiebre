const express = require ('express')
const app = express();
const path = require('path')
const port = 3030;

app.use(express.static('public'));
app.listen (port, ()=> console.log(`Servidor corriendo en el puerto ${port}`))
app.get ('/home', (req, res)=> res.sendFile(path.join(__dirname, 'views','home.html')))
app.get ('/register', (req, res)=> res.sendFile(path.join(__dirname, 'views','home.html')))