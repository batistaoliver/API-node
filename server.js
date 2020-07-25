const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//iniando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');
//const Product = mongoose.model('Product')

app.use('/api', require('./src/routes')); // isso quer dizer que o url da rota agora vai ter o api/ ex: localhost: 3001/api/produtos

app.listen(3001);





// const express = require('express');
// const mongoose = require('mongoose');
// const requireDir = require('require-dir');


// //iniando o app
// const app = express();

// //iniciando o db
// mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true, useUnifiedTopology: true });

// requireDir('./src/models'); 

// //rotas
// app.use('/api', require('./src/routes')); // isso quer dizer que o url da rota agora vai ter o api/ ex: localhost: 3001/api/produtos

// app.listen(3001);