require('dotenv').config();
const express = require('express')
var hbs = require('hbs');


const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alvaro Calderon',
        titulo: 'Curso de Node Pro'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alvaro Calderon',
        titulo: 'Element-Curso de Node Pro'
    });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
      nombre: 'Alvaro Calderon',
      titulo: 'Generic-Curso de Node Pro'
  });
});


// vistas de rutas
/*
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
*/

app.listen(port, () => {
    console.log(`Servidor Corriendo en el puerto http://localhost:${port}`);
})
