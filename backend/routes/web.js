const express = require("express");
const verifyToken = require("../middleware/auth");
const UserController = require("../Controllers/UserController");
const TextController = require("../Controllers/TextController");
const TextHindiController = require("../Controllers/HindiTextControlller");
const CourseController = require("../Controllers/CourseController");
const BlogController = require("../Controllers/BlogController");
const router = express.Router();

//User Routes
router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.get("/getUser",verifyToken, UserController.getUser);
router.get("/logout",verifyToken,UserController.logOut)

//Message English ROUTES
router.post("/insertText",verifyToken, TextController.InsertText);
router.get("/getAllText", TextController.GetAllText);
router.delete("/DeleteText/:id",verifyToken, TextController.DeleteText);

//Message Hindi ROUTES
router.post("/insertHindiText",verifyToken, TextHindiController.InsertHindiText);
router.get("/getAllHindiText", TextHindiController.GetAllHindiText);
router.delete("/DeleteHindiText/:id",verifyToken, TextHindiController.DeleteHindiText);

// Course ROUTES
router.post("/insertCourse",verifyToken, CourseController.InsertCourse);
router.get("/getAllCourse", CourseController.GetAllCourse);
router.delete("/DeleteCourse/:id",verifyToken, CourseController.DeleteCourse);

// Blog ROUTES
router.post("/insertBlog",verifyToken, BlogController.InsertBlog);
router.get("/getAllCourse", BlogController.GetAllBlog);
router.delete("/DeleteCourse/:id",verifyToken, BlogController.DeleteBlog);

module.exports = router;