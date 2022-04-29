const mongoose=require('mongoose')
const CartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    cartItems:[
        {
            product:{type:mongoose.Schema.Types.ObjectId, ref:"product", required:true},
            quanity:{type:Number, default:1}
        }
    ]
},{
    timestamps: true,
});

const Cart = new mongoose.model('cart',CartSchema);
module.exports = Cart;

