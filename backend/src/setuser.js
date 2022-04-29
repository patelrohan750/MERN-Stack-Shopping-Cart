//this file for set deafult user
require('dotenv').config({path:'../.env'});
const User = require('./models/user.model');
require('./db/connection');



const importUser = async()=>{
    try{
        await User.deleteMany({});
        const user = await new User({username:"admin"});
        user.save();
        console.log("user imported successfully")
    }catch(error){
        console.log("error in import user",error)
    }
}

importUser();