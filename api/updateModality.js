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

    const id = req.body.id;
    const nombre = req.body.nombre;
    const codification = btoa(JSON.stringify(req.body.codification));
    const config = req.body.config;

    const sql = `UPDATE Modalidad SET nombre = "${nombre}", descripcion = JSON_REPLACE(descripcion, "$.codification", "${codification}"), configuracion = JSON_REPLACE(configuracion, "$.estado", "${config}") WHERE id LIKE "${id}"`;

    try {
        connection.query(sql, function (err, result) {

            if (err) throw err;

            else
                console.log('record inserted');
            console.log(result);

            if (result.affectedRows > 0) {
                res.json({
                    status: 200,
                    message: req.body,
                });
            }
            else {
                res.json({
                    status: 500,
                    message: "No se pudo actualizar la modalidad",
                });
            }

        });

    } catch (error) {
        // console.error(error);
        return res.status(500).send("Server error");
    }


});



module.exports = app;


