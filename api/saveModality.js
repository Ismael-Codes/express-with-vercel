/* POST programming language */
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
var cors = require('cors')
connection = require("../db/conf");
let message;
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

connection.connect();


app.post('/', function (req, res, next) {
  var nombre = req.body.nombre;
  const codification = btoa(JSON.stringify(req.body.codification));

  var sql = `INSERT INTO Modalidad (nombre, descripcion, configuracion) VALUES ("${nombre}", '{"codification": "${codification}"}', '{"estado": true}')`;

  try {
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('record inserted');

    });
    res.json({
      status: 200,
      message: "record inserted'",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }


});




module.exports = app;


