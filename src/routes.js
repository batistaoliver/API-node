//const express = require('express') ;
//const routes = express.Router();
//const mongoose = require('mongoose');
//const Product = mongoose.model('Product')


//primeira rota
// routes.get('/',(req,res)=>{
//     Product.create({
//         title: "React Native",
//         description: "Build native apps with React",
//         url: "https://github.com/facebook/react-native"
//     });
//     res.send("Hello Rocketseat");
// })

// module.exports = routes;


const express = require('express') ;
const routes = express.Router();

const ProductController = require('./controllers/ProductControllers')

routes.get("/products", ProductController.index);
routes.get("/products/:id",ProductController.show);

//post é para rotas de criação de algo
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;