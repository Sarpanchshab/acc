const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
    name:{
=======
    name: {
>>>>>>> 31ab57070a5221a760d3cf0e1611c013b491fa11
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const UserModel = mongoose.model("User.model", UserSchema);
module.exports = UserModel;
