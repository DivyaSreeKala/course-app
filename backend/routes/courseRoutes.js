

const express = require('express');
const router = express.Router();

const upload = require('../upload'); // Import your multer configuration


router.use(express.json())
router.use(express.urlencoded({extended:true}))

const courseModal = require('../model/courseData')

router.get('/',async(req,res)=>{
    try{
        const data = await courseModal.find();
        res.status(200).send(data)
    }catch{
        res.status(404).send('error')
    }

})

// router.post('/add', upload.single('Image'),async(req,res)=>{
    router.post('/add',async(req,res)=>{
    try{
        const data = req.body;
        const data1 = new courseModal();
        // const data1 = new courseModal({
        //     courseId: data.courseId,
        //     courseName: data.courseName,
        //     courseCategory: data.courseCategory,
        //     courseDescription: data.courseDescription,
        //     Duration: data.Duration,
        //     Fee: data.Fee,
        //     Image: {
        //         data: req.file.buffer, // Store image buffer
        //         contentType: req.file.mimetype // Store MIME type
        //     }
        // })
        const savedData = await data1.save()
        // Construct the URL for accessing the image
        // const imageUrl = `http://localhost:3000/courses/image/${savedData._id}`;
        
        // res.status(200).send({ message: 'Success', imageUrl });
        res.status(200).send('success')
    }catch(error){
        console.log(error)
        res.send(error)
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const course = await courseModal.findById(req.params.id);
        res.status(200).send(course)
    }catch(err){
        res.status(404).send('error')
    }
})

//update
router.put('/edit/:id',async (req,res)=>{
    try{
        const item = req.body;
        const id = req.params.id;//id from the url 
        // const movieItem1 = new movieModel(item);
        const data = await courseModal.findByIdAndUpdate(id,req.body);
        res.status(200).send('update successful')
    }catch(err){
        res.status(404).send('Update unsuccessful')

    }
})

//delete
router.delete('/delete/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await courseModal.findByIdAndDelete(id)
        res.status(200).send('deleted successfully')
    }catch(error){
        res.status(404).send('deletion unsuccessful')
    }
})

module.exports = router