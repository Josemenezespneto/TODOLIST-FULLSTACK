const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT ;

//const dotenv = require( 'dotenv' );

app.listen(3333, ()=>{console.log('Server is running port 3333!')})

