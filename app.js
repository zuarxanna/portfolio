const express = require('express');
const app = express();

// STATIC FILES
app.use(express.static('public'))

// VIEWS
const expressLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main');

app.use(expressLayouts)

// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs');
})

// PORT

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running at port: ${PORT}`)
})