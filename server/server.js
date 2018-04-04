const bodyParser = require('body-parser')
    , express = require('express')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller.js');;
require('dotenv').config();


// 74C
const app = express();
app.use(bodyParser.json());
app.use(cors());


// ---endpoints---

// login
// 74D-1
app.get('/api/getLogin', controller.getLogin);
// 76C
app.get('/api/getAllUserInfo', controller.getAllUserInfo);



const port = 5001
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, console.log(`this server is testing on port ${port}.`))
})