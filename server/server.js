// mongoDB
require('./config/db');

require('dotenv').config();

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/User')

// FOr accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

const cors = require("cors");
app.use(cors());

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
