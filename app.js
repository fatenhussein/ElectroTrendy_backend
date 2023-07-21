const express = require("express");
const morgan = require("morgan")
const app = express();
const productRouter = require("./routes/productRoute")
const vendorRouter = require("./routes/vendorRoute")

// create middleware
///-------------///
//to access the body req 
app.use(express.json());
//third party middleware // helps you to see data inside the req 
if(process.env.NODE_ENV==="development"){
app.use(morgan("dev"))
}

app.use("/api/v1/products" , productRouter);

app.use("/api/v1/vendors" , vendorRouter);



module.exports  = app; 