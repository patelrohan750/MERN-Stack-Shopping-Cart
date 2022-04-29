const express=require('express');
const router=express.Router();
const controller = require('../controllers/product.controller');
const multer = require('multer');
const path = require('path');
// require('../../../frontend')
const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,path.join(__dirname, `../../../frontend/public/uploads/`));
    },
    filename:(req,file,callback) =>{
        callback(null,file.originalname);
    }
})
const upload = multer({storage:storage})

router.post('/api/product',upload.single('imgae'),controller.saveProduct);
router.get('/api/products',controller.getProducts);
router.get('/api/product/:id',controller.getProduct);


module.exports = router;