const express = require('express');
require('./database')
const userRoutes = require('./userRoutes');
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRoutes)
app.listen(8000, () => {console.log('Server running on port 8000.')})
// express()
//   .use(cors())
//   .use(express.urlencoded({extended: true}))
//   .use(express.json())
//   .use(userRoutes)
//   .listen(8000, () => {console.log('Server running on port 8000.')})

// express()
//     .use(morgan("tiny"))
//     .use(require("body-parser").json())
//     .use(express.static("public"))

//     .get(`/`, (req, res) => {
//         res.send("Let's see what this leads me to!")
//     })


//     .get(`*`, (req, res) => {
//         res.status(404).json({
//             status: 404,
//             message: "This is quite obviously the wrong page! It does not exist!",
//         });
//     })

//     .listen(8000, () => {console.log(`Listening on port 8000`)});
