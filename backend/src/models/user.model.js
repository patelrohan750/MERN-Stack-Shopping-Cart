const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
})
const User = new mongoose.model('user',userSchema);
module.exports = User;