
const mongoose = require('mongoose')


const schema = mongoose.Schema({
    courseId:String,
    courseName:String,
    Image:String,
    // Image:{
    //     data: Buffer,
    //     contentType: String
    // },
    courseCategory:String,
    courseDescription:String,
    Duration:Number,
    Fee:Number
})

const courseData = mongoose.model('course',schema)
module.exports = courseData;
