const express = require('express');
const cors = require('cors');

const app = express()

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    res.send(`<div class="length">Длина строки - ${req.query.input.length}</div>`) 
})

app.post('/', (req, res) => {
    res.send(`<div class="length">Длина строки - 5</div>`) 
})

app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`))