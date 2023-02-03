const mysql = require('mysql2');

const connection =  mysql.createConnection({
    host: 'f450gmj9s3zg.us-east-1.psdb.cloud',
    user: 'j9oh4nt6y0b6',
    password: 'pscale_pw_uNo98CHS8JH7qHE7belgIfgtofg08qVuHTwWJWh85Hs',
    ssl:{}
});



connection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('database is connected');
    }
});

module.exports = connection;

