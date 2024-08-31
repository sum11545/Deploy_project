const express = require('express')
const app = express()
const port = 5000 

app.get('/',(req,res)=>{
    res.send('Hello World this a deployment from vercel this a DEMO WORK')
})

app.get('/:name',(req,res)=>{
    res.send(`Hello ${req.params.name} this a deployment from vercel this a DEMO`)
})

app.listen(port)