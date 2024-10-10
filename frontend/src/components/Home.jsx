import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Home = () => {
  const [inputs,setInputs] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/courses/').then((res)=>{
      console.log(res.data)
      setInputs(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
        {inputs.map((value,index)=>
         <>
          <CardMedia
          component="img" // Ensure you specify this prop
        sx={{ height: 140 }}
        image={value.image}
        title="green iguana"
      />
      {console.log(value.image)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.courseName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {value.courseDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' color='success'>Edit</Button>
        <Button size="small" variant='contained' color='error'>Delete</Button>
      </CardActions>
          
        </>  )}
      
    </Card>
    </div>
  )
}

export default Home
