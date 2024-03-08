import express from 'express'

const PORT = process.env.PORT || 8080;

const app = express()



app.get('/', (req, res) => {
    res.send('Hellp postmen? guy')
})

app.listen(PORT, () => {console.log('WORK')})