/* POST programming language */
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
connection = require("../db/conf");
let message;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

connection.connect();

app.post('/', function (req, res, next) {
    var nombre = req.body.nombre;
    var aPaterno = req.body.aPaterno;
    var aMaterno = req.body.aMaterno;
    var matricula = req.body.matricula;
    var email = req.body.email;
    var nip = "4545";
    var tipo = "1";
    var id = "155";
    var sql = `INSERT INTO Usuario (nombre, a_paterno, a_materno, matricula, email, nip, id_tipoUsuario)
                   VALUES ("${nombre}", "${aPaterno}", "${aMaterno}", "${matricula}", "${email}", "${nip}", "${tipo}")`;

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

