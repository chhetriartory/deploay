const express = require('express')
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('anil')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login at anil chhetr</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})