// Middleware for handling auth

const jwt = require("jsonwebtoken");
require('dotenv').config();
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token =  req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);
        if(decodedValue.userName){
            next();
        }else{
            res.status(403).json({
                message: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            message: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;