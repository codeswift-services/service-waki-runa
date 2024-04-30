const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

if(process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

app.use(express.json())

app.get('/helloworld2', (req, res) => {
    res.send('hello world')
})

require('./features/user/user.routes')(app)

app.listen(PORT, () => {
    console.log('running...' )
})