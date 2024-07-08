const express = require('express');
 const router = express.Router();
 
// new route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
 })

 router.get('/take', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})
 })

 router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let quotient = number1 / number2
    console.log(quotient)
    res.status(200)
    res.json({result:quotient})
 })

 router.get('/times', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
 })

 module.exports = router;