const express = require('express')
const app = express()
const port = 3000


if(process.env.NODE_ENV === "development") {
    require('dotenv').config()
}


app.get('/helloworld', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('running...' )
})