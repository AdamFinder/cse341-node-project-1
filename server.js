const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./db/connect')


const port = process.env.PORT || 8080;
const app = express();





app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        //This following chunk of code for testing on the front end react appears to break my Swagger ui
        // & does not work for the REACT front end site.

        // res.setHeader(
        //     'Access-Control-Allow_Header',
        //     'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        // );
        // res.setHeader('Content-Type', 'application/json');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        
        next();
    })
    .use('/', require('./routes'));
    



mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`connected to DB and listening on ${port}`);
    }
});