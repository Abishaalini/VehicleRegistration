import * as React from 'react';
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper, Button} from '@mui/material';

export default function Vehicle() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};
    const[owner,setOwner]=useState('')
    const[plate_number,setPlate_number]=useState('')
    const[vehicles,setVehicles]=useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const vehicle={plate_number,owner}
        console.log(vehicle)
        fetch("http://localhost:8080/vehicle/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(vehicle)
        }).then(()=>{
            console.log("New vehicle is registered")
        })
    }
    useEffect(()=>{
      fetch("http://localhost:8080/vehicle/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setVehicles(result);
      })
    },[])
  return (
     
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"orange"}}>Vehicle Registration</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Vehicle Plate number" variant="standard" fullWidth 
      value={plate_number}
      onChange={(e)=>setPlate_number(e.target.value)}/>
      <TextField id="standard-basic" label="Vehicle Owner name" variant="standard" fullWidth 
       value={owner}
       onChange={(e)=>setOwner(e.target.value)}/>
       <Button color="secondary" onClick={handleClick}>Submit</Button>
    </Box>
    </Paper>
    <Paper elevation={3} style={paperStyle}>
       {vehicles.map(vehicle=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={vehicle.id}>
          Id:{vehicle.id}
          Owner:{vehicle.owner}
          plate_number:{vehicle.plate_number}
        </Paper>
       ))}
    </Paper>
    </Container>
  );
}
