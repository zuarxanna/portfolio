const express = require('express');
const app = express();

require('dotenv').config();

// body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser())

// STATIC FILES
app.use(express.static('public'))

// VIEWS
const expressLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main');

app.use(expressLayouts)

// ROUTES
const router = require('./routers');
app.use(router);

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running at port: ${PORT}`)
})