const express=require('express');
const router=express.Router();
const controller = require('../controllers/cart.controller');


router.post('/api/addtocart',controller.addItemToCart);
router.get('/api/cart',controller.getCartItems);
router.post('/api/removeItem',controller.removeCartItem);
//for get deafult user info
router.get('/api/user',controller.getUser);


module.exports = router;