const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to my website!');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app running at port: ${PORT}`)
})