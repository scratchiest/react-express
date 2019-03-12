const express = require('express')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: "You are connected to express backend server. Awesome!",
        link: 'http://localhost:5000/'
    }).status(200)
})

app.listen(port, () => console.log(`Server started on port ${port}`))