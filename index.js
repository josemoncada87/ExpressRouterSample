const express = require('express')
const app = express()

const studentsRouter = require('./students');

app.use('/students', studentsRouter);
/*
app.get('/students', (req, res)=>{
    res.send("Un montón de estudiantes")
})*/

app.get('/teachers', (req, res)=>{
    res.send("Un montón de profesores")
})

app.get('/classes', (req, res)=>{
    res.send("Un montón de clases")
})

app.get('/classroom', (req, res)=>{
    res.send("Un montón de salones")
})

app.listen(3000, ()=>{
    console.log("Started listening at 3000")
})