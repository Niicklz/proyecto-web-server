const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;
  console.log(port);
  console.log(public_path);
  
  const app = express()

  //Para poder usar middlewares se utiliza la palabra use

  app.use(express.static(public_path)) // Contenido estatico

  app.get("/", (req, res)=> {
    const indexPath = path.join(__dirname + `../public/index.html`)
    res.sendFile(indexPath)
  }) 
  app.listen(port, ()=> console.log("server activo en el puerto 3000")
  )
};

module.exports = {
    startServer
}