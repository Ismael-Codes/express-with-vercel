const express = require("express");
const router = express.Router();
connection = require("../db/conf");
let result;

router.get("/", async (req, res) => {
    try {
        connection.connect();

        connection.query('SELECT * from Registro'  , function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0]);
            result =rows
        });

        res.json({
            status: 200,
            message: result,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("users Server error");
    }
});
module.exports = router;
// connection.end();

