const express = require('express');
const router = express.Router();

// 127.0.0.1:3000/students
router.get('/', (req, res)=>{
    console.log("mensaje a root de estudiantes")
    res.send("ok")
})

router.get('/:id', (req, res)=>{
    console.log("mensaje a un estudiantes de id: " + req.params.id )
    res.send("te mando al de id: " + req.params.id )
})


module.exports = router;