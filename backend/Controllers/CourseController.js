const CourseModel = require("../model/Course");
const cloudinary = require("cloudinary").v2;
class CourseController {

  static InsertCourse = async (req, res) => {
    try {
      //   console.log(req.files)
      const file = req.files.image;
      const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "CourseImage",
      });

      const { title, duration, price } = req.body;
      const data = new CourseModel({
        title: title,
        duration: duration,
        price: price,
        image: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
      });
      await data.save();
      res.status(200).json({
        status: "success",
        message: "Course added Successfully",
      });
    } catch (error) {
      res.send(error);
    }
  };

  static GetAllCourse = async (req, res) => {
    try {
      // Get all course
      const allCourse = await CourseModel.find();
      // Count the number of course
      const courseCount = await CourseModel.countDocuments();
      res.status(201).json({
        status: true,
        allCourse,
        courseCount, // Return the count of course
      });
    } catch (error) {
      res.send(error);
    }
  };

  static GetNumberCourse = async (req, res) => {
    try {
        // Get the 3 most recent courses
        const recentCourses = await CourseModel.find().sort({ _id: -1 }).limit(3);
        
        res.status(200).json({
            status: true,
            recentCourses, // Return only the last 3 courses
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


  static DeleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res
          .status(400)
          .json({ status: "failed", message: "Course not found" });
      }
      await CourseModel.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ status: "success", message: "Course deleted successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: "failed", message: "Internal server error." });
    }
  };
}

module.exports = CourseController;
