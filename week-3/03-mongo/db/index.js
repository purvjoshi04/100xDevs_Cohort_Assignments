const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    Name: String,
    userName: String,
    password: String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    Name: String,
    userName: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    Name: String,
    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}