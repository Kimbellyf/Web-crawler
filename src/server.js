const express = require("express")
const mongoose = require ("mongoose")
const requireDir = require("require-dir");

//Iniciando o app
const app = express();
app.use(express.json())

//Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",{useNewUrlParser:true}
);

//Rotas
app.use("/api",require("./routes"));



app.listen(3001);