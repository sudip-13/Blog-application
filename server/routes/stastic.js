const express = require("express");
const {
  newVlogCreate,
  getBlog,
  postNewQuery,
  getAllBlog,
  addComment,
  getEmail,
  register,
  login,
  welcome,
  decodeJWT,
  getComments,
  getPosts,
  getInboxes,
  getPopularBlog,
  getAllquery,
  getSolvequery,
  submitFeedback,
  submitISsues,
  generateOtp,
  otpValidation,
  resetPassword,
} = require("../controllers/auth");
const { createAndSendToken, verifyToken } = require("../middlewares/auth");
const StaticRouter = express.Router();

StaticRouter.post("/createblog", newVlogCreate);
StaticRouter.post("/getblog", getBlog);
StaticRouter.post("/postnewquery", postNewQuery);
StaticRouter.post("/getallblog", getAllBlog);
StaticRouter.post("/addcomment", addComment);
StaticRouter.post("/register", register);
StaticRouter.post("/login", login);
StaticRouter.post("/verifyjwt", verifyToken, welcome);
StaticRouter.post("/getuser", decodeJWT);
StaticRouter.post("/getcomments", getComments);
StaticRouter.post("/getposts", getPosts);
StaticRouter.post("/getinboxes", getInboxes);
StaticRouter.post("/getpopularblog", getPopularBlog);
StaticRouter.post("/getallquery", getAllquery);
StaticRouter.post("/getsolvequery", getSolvequery);
StaticRouter.post("/submitfeedback", submitFeedback);
StaticRouter.post("/submitissues", submitISsues);
StaticRouter.post("/generateotp", generateOtp);
StaticRouter.post("/otpvalidation", otpValidation);
StaticRouter.post("/resetpassword", resetPassword);

module.exports = StaticRouter;
