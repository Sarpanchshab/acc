const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });

const CourseModel = mongoose.model("CourseModel", CourseSchema);
module.exports = CourseModel;
