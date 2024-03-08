const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const ContentRoute = require('./Routes/ContentRoutes');

const PORT = 3000;

const app = express(); 

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
}));
app.use(bodyParser.json())
app.use('/api', ContentRoute)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))


// "builds": [
//     {
//         "src": "./index.js",
//         "use": "@vercel/node"
//     }
// ],
// "routes": [
//     {
//         "src": "/(.*)",
//         "dest": "/"
//     }
// ]