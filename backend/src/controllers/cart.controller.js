const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
//add product in cart
module.exports.addItemToCart = async (req, res) => {
  try {
    //deafult load user id
    const user = await User.findOne();

    Cart.findOne({ user: user._id }).exec((error, cart) => {
      if (error) return res.status(400).json({ error });
      if (cart) {
        const { product, quntity } = req.body;
        const isItemAdd = cart.cartItems.find(
          (c) => c.product.toString() == product
        );

        if (isItemAdd) {
          Cart.findOneAndUpdate(
            { user: user._id, "cartItems.product": product },
            {
              $set: {
                "cartItems.$": {
                  ...req.body,
                  quanity: quntity,
                },
              },
            }
          ).exec((error, _cart) => {
            if (error) return res.status(400).json({ error, success: false });
            if (_cart) {
              sendProductData(user._id, res);
            }
          });
        } else {
          cart.cartItems.push(req.body);
          cart.save((error,_cart)=>{
            if(error) return res.status(400).json({ error, success: false });
            if(_cart){
              sendProductData(user._id, res);
            }
          });
        }
      } else {
        //if cart not exist then create a new cart
        const cart = new Cart({
          user: user._id,
          cartItems: req.body,
        });
        cart.save((error,_cart)=>{
          if(error) return res.status(400).json({ error, success: false });
          if(_cart){
            sendProductData(user._id, res);
          }
        });
      }
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ errors, success: false });
    }
    res.status(500).json({ message: "error in add to cart", success: false });
  }
};

//get all products
module.exports.getCartItems = async (req, res) => {
  try {
    const user = await User.findOne();
    sendProductData(user._id, res);
  } catch (e) {
    res
      .status(500)
      .json({ message: "error in fetching cartItems", success: false });
  }
};

//remove cart items
module.exports.removeCartItem = async (req, res) => {
  try {
    const user = await User.findOne();
    const upcart = await Cart.updateOne(
      { user: user._id },
      {
        $pull: {
          cartItems: {
            product: req.body.productId,
          },
        },
      }
    );
    sendProductData(user._id, res);
  } catch (e) {
    res
      .status(500)
      .json({ message: "error in remove cartItems", success: false });
  }
};

module.exports.getUser =async(req,res)=>{
  try{
    const user = await User.findOne();
    res.status(200).json({user:user,success:true})
  }catch (e) {
    res
      .status(500)
      .json({ message: "error in fetch user", success: false });
  }
}
function sendProductData(userID, res) {
  Cart.findOne({ user: userID })
    .populate("cartItems.product", "_id productName imgae price")
    .exec((error, cart) => {
      if (error) return res.status(400).json({ error, success: false });
      if (cart) {
        let cartItems = [];
        cart.cartItems.forEach((item, index) => {
          cartItems.push({
            _id: item.product._id.toString(),
            name: item.product.productName,
            img: item.product.imgae,
            price: item.product.price,
            quanity: item.quanity,
          });
        });
        res.status(200).json({ cart: cartItems, success: true });
      }
    });
}
