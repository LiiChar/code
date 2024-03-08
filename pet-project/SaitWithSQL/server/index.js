
const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express()

const PORT = 5000

app.use(express.json())
app.use(cors())
const pool = mysql2.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "post",
    password: "Qwerty24688642"
})

app.get('/', (req, res) => {
    pool.query("SELECT * FROM posts", (err, data) => {
        if(err) return console.log(err);
        res.status(200).json({
            post: data
        })
    })
})

app.post('/post', (req, res) => {
    const post = JSON.parse(req.body.post)
    pool.query("INSERT INTO posts (post) VALUE (?)", [post] , (err, result) => {
        if(err) return console.log(err);
        res.status(200)
        console.log(result);

    })
})

app.delete('/:id', (req, res) => {
    const del = req.params.id
    pool.query("DELETE FROM posts WHERE id=?", [del] , (err, result) => {
        if(err) return console.log(err);
        res.status(200)
        console.log(result);
    })
})

app.listen(PORT, () => console.log('Сервер запущен'))