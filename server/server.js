const bodyParser = require('body-parser')
    , express = require('express')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller.js');;
require('dotenv').config();



const app = express();
app.use(bodyParser.json());
app.use(cors());


// ---endpoints---

// login
app.get('/api/getLogin', controller.getLogin);



const port = 5001
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, console.log(`this server is testing on port ${port}.`))
})