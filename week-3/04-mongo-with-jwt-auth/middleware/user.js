const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorizations;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);

    if(decodedValue.userName) {
        req.userName = decodedValue.userName;
        next();
    }else{
        res.status(403).json({
            message: "You are not authenticated."
        })
    }
}

module.exports = userMiddleware;