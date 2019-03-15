// Trae la carpeta express
const express = require('express');
// Cambia el color de las letras en git bash
const chalk = require('chalk');
// Ejecuta express
const app = express();
// Puerto
const port = 8080;

// rutas
app.get('/', (req, res) => {
  res.send('Estoy respondiendo');
  // res.json();
  // res.redirect();
});
// app.post();
// app.put();
// app.delete();

// Escucha prticiones en un puerto. Equivalente a app.listen: express().listen
app.listen(port, () => {
  console.log(`El servidor ha iniciado en el puerto ${port}`);
  console.log(chalk.cyan(`http://localhost:${port}`));
});
