const testRoutes = 
require('./routes/myTestRoutes');
const calculatorRoutes = 
require('./routes/calculatorRoutes');

const express = require("express");
const app = express();
const path=require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("This is a test");
  });

app.listen(port, () => {
  console.log(`Example app listening 
at http://localhost:${port}`);
});