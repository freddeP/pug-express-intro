const express = require("express");
const app = express();

// För att kunna läsa in css och front-end-js från public
app.use(express.static(__dirname+"/public"));

// Definierar vilken katalog som skall användas till vyer
app.set('views', './views');

// Definiera vilken vy-motor som skall användas.
// express kör eventuella pug-kommandon i bakgrunden.
app.set('view engine', 'pug');

//exempeldata
const names = ["Lenny","Jane", "Benny", "Sören", "Jens-Peter"];

app.get('/', (req, res) => {res.render('index', { title: 'Express PUG', names })});

app.listen(2400,()=>{console.log("port: "+2400)});