require('dotenv').config({path:'../.env'});
const axios = require('axios');
require('./db/connection')
const Product = require('./models/product.model')
const User = require('./models/user.model')
const fs = require('fs');
const https = require('https');
const path = require('path');

const saveImage=(url,path)=>{
    const fullUrl = url;
    const localPath = fs.createWriteStream(path)
    const request = https.get(fullUrl,function(res){
        res.pipe(localPath);
    })
}


const importData = async() =>{
    // await Product.deleteMany();
    const products = await axios.get('https://fakestoreapi.com/products');
    const user = await User.findOne({}); 
    const productData = []
    products.data.map((item)=>{
        const imageName = `${Date.now()}.png`;
        const saveImagePath = path.join(__dirname, `../../frontend/public/uploads/${imageName}`);
        saveImage(item.image,saveImagePath)
        productData.push({
            productName:item.title,
            description:item.description,
            price:item.price,
            quntity:20,
            imgae:imageName,
            createdBy:user._id,
        })
        
    })
    await Product.insertMany(productData);
    console.log(`${products.data.length} Data Imported Successfully`);
}
importData();

