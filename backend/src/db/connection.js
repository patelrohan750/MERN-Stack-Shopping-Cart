const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database connection sucessfull");
}).catch((e)=>{
    console.log("No Database Connection!!!");
    console.log(e);
})