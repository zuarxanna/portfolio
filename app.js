const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to my website!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app running at port: ${PORT}`)
})