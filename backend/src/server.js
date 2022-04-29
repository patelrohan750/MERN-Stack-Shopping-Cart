require('dotenv').config({path:'../.env'});
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 8000;
//DB Connection
require('./db/connection');
const productRouter = require('./routers/product.route'); 
const cartRouter  = require('./routers/cart.route')

app.use(cookieParser())
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(productRouter);
app.use(cartRouter);


app.get('/',async(req,res)=>{
    res.send("Hello From Express Server");
})
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})