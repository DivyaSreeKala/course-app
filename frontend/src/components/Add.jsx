import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Add = () => {
  const [inputs,setInputs] = useState({
    courseId:"",
    courseName:"",
    image:"",
    courseCategory:"",
    courseDescription:"",
    courseDuration:0,
    Fee:0
  })
  const location = useLocation();
  const navigate = useNavigate();
  const sendData = (e) => {
    if(location.state!=null){
        e.preventDefault();
        axios.put('http://localhost:3002/courses/edit/'+location.state.course._id,inputs).then((res)=>{
          alert('Data updated');
          navigate('/')
        }).catch((err)=>{
          alert(err)
          console.log(err)
        })
      }
      else{
        e.preventDefault()
        console.log(inputs)
        axios.post('http://localhost:3002/courses/add',inputs).then((res)=>{
          navigate('/')
        }).catch((err)=>{
          console.log(err)
        })
      }

    }
    useEffect(()=>{
        if(location.state != null){
          setInputs({...inputs,
            courseId:location.state.course.courseId,
            courseName:location.state.course.courseName,
            image:location.state.course.image,
            courseDescription:location.state.course.courseDescription,
            courseCategory:location.state.course.courseCategory,
            Duration:location.state.course.Duration,
            Fee:location.state.course.Fee
          })
        }
    },[])
    const onInputChange = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
  return(
    <div>
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Course Id" name="courseId" value={inputs.courseId} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="Course Name" name="courseName" value={inputs.courseName} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="Image" name="image" value={inputs.image} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="courseCategory" name="courseCategory" value={inputs.courseCategory} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="courseDescription" name="courseDescription" value={inputs.courseDescription} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="Duration" name="Duration" value={inputs.Duration} onChange={onInputChange} variant="outlined" /><br />
      <TextField id="outlined-basic" label="Fee" name="Fee" value={inputs.Fee} onChange={onInputChange} variant="outlined" /><br />
      <button type="button" onClick={(e)=>sendData(e)}>Add</button>
    </Box>
    </div>
  )
}

export default Add
