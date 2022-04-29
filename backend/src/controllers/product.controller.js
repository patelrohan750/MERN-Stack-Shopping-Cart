const Product = require('../models/product.model');

//product save
module.exports.saveProduct = async(req,res) =>{
    
    const {productName,imgae,description,quntity,price,createdBy} = req.body;
    try{
        
        const product = new Product({
            productName,
            'imgae':req.file.filename,
            description,
            quntity,
            price,
            createdBy});
        
        await product.save();
        res.json({message: "product save successfully", product: product, success:true })
    }catch(error){
        if(error.name == "ValidationError"){
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
        return res.status(400).json({errors,success:false});
        }
        res.status(500).json({ message: "error in save product", success:false });
    }
}

//get all products
module.exports.getProducts =async(req,res)=>{
    try{
        const products = await Product.find({});
        res.json({products:products, success:true});
    }catch(e){
        res.status(500).json({ message: "error in fetching products", success:false });
    }
}

//get particular prodcut
module.exports.getProduct = async(req,res)=>{
    const {id} = req.params;
    try{
        const product = await Product.findOne({_id:id});
        res.json({product:product, success:true});

    }catch(e){
        res.status(500).json({ message: "error in fetching product deatils", success:false });
    }
}