import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Add = () => {
  const [inputs,setInputs] = useState({
    courseId:"",
    courseName:"",
    Image:"",
    courseCategory:"",
    courseDescription:"",
    Duration:0,
    Fee:0
  })
  return (
    <div>
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Course Id" name="courseId" variant="outlined" /><br />
      <TextField id="outlined-basic" label="Course Name" name="courseName" variant="outlined" /><br />
      <TextField id="outlined-basic" label="Image" name="Image" variant="outlined" /><br />
      <TextField id="outlined-basic" label="courseCategory" name="courseCategory" variant="outlined" /><br />
      <TextField id="outlined-basic" label="Duration" name="Duration" variant="outlined" /><br />
      <TextField id="outlined-basic" label="Fee" name="Fee" variant="outlined" /><br />
      
    </Box>
    </div>
  )
}

export default Add
