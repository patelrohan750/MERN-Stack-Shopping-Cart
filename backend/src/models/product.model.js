const mongoose=require('mongoose')
const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    imgae:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quntity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
},{
    timestamps: true,
});

const Product = new mongoose.model('product',ProductSchema);
module.exports = Product;