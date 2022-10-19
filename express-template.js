const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello")
})

const port = process.env.PORT || 3000;

app.listen(port, () => `Server running on port ${port} 🔥`);
