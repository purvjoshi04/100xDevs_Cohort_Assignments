const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index.js");
const router = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.userName;
  const password = req.body.password;

  await Admin.create({
    userName: username,
    password: password,
  });

  res.json({
    message: "Admin is created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.userName;
  const password = req.body.password;
  // console.log(process.env.JWT_SECRET);

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      { username: user.username }, 
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect username and pass",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({
      message: "Authorization header is missing"
    })
  }

  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
      error: error.message
    })
  }
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
