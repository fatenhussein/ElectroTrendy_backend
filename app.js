const express = require("express");
const morgan = require("morgan")
const app = express();
const productRouter = require("./routes/productRoute")

// create middleware
///-------------///
//to access the body req 
app.use(express.json());
//third party middleware // helps you to see data inside the req 
if(process.env.NODE_ENV==="development"){
app.use(morgan("dev"))
}

app.use("/api/v1/products" , productRouter);





module.exports  = app ; 