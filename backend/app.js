

const express = require('express')

const cors = require('cors')

const app = new express()


app.use(cors())//mention this ppication is using cors

// const upload = require('./upload'); // Import your multer configuration

const morgan = require('morgan')
app.use(morgan('dev'))

const courseRoutes = require('./routes/courseRoutes')
app.use('/courses',courseRoutes)


const userRoutes = require('./routes/user');
app.use('/users',userRoutes)
// require('dotenv').config()
require('dotenv').config();

require('./db/connection')

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
