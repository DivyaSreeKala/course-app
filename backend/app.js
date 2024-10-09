

const express = require('express')
const app = new express()

// const upload = require('./upload'); // Import your multer configuration

const morgan = require('morgan')
app.use(morgan('dev'))

const courseRoutes = require('./routes/courseRoutes')
app.use('/courses',courseRoutes)

// require('dotenv').config()
require('dotenv').config();

require('./db/connection')

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
