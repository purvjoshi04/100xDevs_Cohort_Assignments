const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index.js");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.userName;
    const password = req.body.password;

    await User.create({
        userName: username,
        password: password
    });

    res.status(200).json({
        message: "User created successfully"
    })

    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.userName;
    const password = req.body.password;
    console.log(process.env.JWT_SECRET);

   const user = await User.find({
        username,
        password
    })
    if(user) {
        const token = jwt.sign({
            username
        }, process.env.JWT_SECRET);

        res.json({
            token
        })
    }else {
        res.status(411).json({
            message: "Incorrect username or pass"
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router