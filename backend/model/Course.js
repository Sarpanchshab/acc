const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
}, { timestamps: true });

const CourseModel = mongoose.model("CourseModel", CourseSchema);
module.exports = CourseModel;
