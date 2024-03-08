const express = require('express');
const db = require('../Database/database')
const router = express.Router();

router.get('/content', (req, res) => {
    const sql = 'SELECT * FROM content';

    db.each(sql, (err, rows) => {
        if (err){
            res.status(423).json({"error": err.message})
            return;
        }
        console.log(rows);
        res.json(rows);
    })

    // db.get(sql, (err, result) => {
    //     if (err){
    //         res.status(423).json({"error": err.message})
    //         return;
    //     }
    //     console.log(result);
    //     res.json(result);
    // })
})

router.post('/upload', (req, res) => {
    const {content, nameFile, name, type} = {
        name: req.body.name ? req.body.name : req.body.nameFile,
        nameFile: req.body.nameFile,
        type: req.body.type,
        content : req.body.content
    }

    const sql = 'INSERT INTO content (name, nameFile, type, content) VALUES (?, ?, ?, ?)'

    db.run(sql, [name, nameFile, type, JSON.stringify(content)], (err, data) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
        })
    })
});

router.get('/content/:name', (req, res) => {
    const name = req.params.name;

    const sql = 'SELECT name, nameFile, type, content FROM content WHERE name=(?)'

    db.get(sql, [name], (err, result) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        if (!result) {
            res.status(401).json({"error": 'Not found'})
            return
        }

        res.json({
            "message": "success",
            "data": result,
        })
    })
})

module.exports = router;

