import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
  const [inputs,setInputs] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/courses/').then((res)=>{
      console.log(res.data)
      setInputs(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])
  const onDelete = (empId) => {
    axios.delete('http://localhost:3002/courses/delete/'+empId).then((res)=>{
      alert('deleted successfully')
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
      alert('error in deletion')
    })
  }
  const navigate = useNavigate();
  const onUpdate = (course) => {
        navigate('/add',{state:{course}})//to load component in path /add and pass aobject storing it in state in the location
  }

  return (
    <div style={{width:"100%",height:"100%", backgroundColor:'none',borderRadius:"10px"}}>
       <Card sx={{ width: '100%',display:"flex", justifyContent:'start'}}>
        {inputs.map((value,index)=>
         <div style={{margin:"10px",width:"400px",border:"1px solid gray",borderRadius:'10px'}}>
          <CardMedia
          component="img" // Ensure you specify this prop
        sx={{ height: 140 }}
        image={value.image}
        title="green iguana"
      />
      {console.log(value._id)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.courseName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {value.courseDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='success' onClick={()=>onUpdate(value)}>Edit</Button>
        <Button size="small" variant='contained' color='error' onClick={()=>onDelete(value._id)}  >Delete</Button>
      </CardActions>
          
        </div>  )}
      
    </Card>
    </div>
  )
}

export default Home
