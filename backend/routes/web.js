const express = require("express");
const verifyToken = require("../middleware/auth");
const UserController = require("../Controllers/UserController");
const TextController = require("../Controllers/TextController");
const TextHindiController = require("../Controllers/HindiTextControlller");
const router = express.Router();

//User Routes
router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.get("/getUser",verifyToken, UserController.getUser);
// router.get("/logout",verifyToken,UserController.LogOut)

//Message English ROUTES
router.post("/insertText",verifyToken, TextController.InsertText);
router.get("/getAllText", TextController.GetAllText);
router.delete("/DeleteText",verifyToken, TextController.DeleteText);

//Message Hindi ROUTES
router.post("/insertHindiText",verifyToken, TextHindiController.InsertHindiText);
router.get("/getAllHindiText", TextHindiController.GetAllHindiText);
router.delete("/DeleteHindiText",verifyToken, TextHindiController.DeleteHindiText);

module.exports = router;