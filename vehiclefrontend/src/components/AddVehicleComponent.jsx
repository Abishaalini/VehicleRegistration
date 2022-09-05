
import React, {useState,useEffect } from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom';
import VehicleServiceAPI from '../services/VehicleServiceAPI';
import swal from 'sweetalert';





const AddVehicleComponent=()=>{
 
    const [owner,setOwner]=useState('')
    const [plate_number,setPlate_number]=useState('')
    const history=useNavigate();
    const {Id}= useParams();
    const [error,setError]=useState('')
    
    const saveOrUpdateVehicle=(e)=>{
        e.preventDefault();
        const vehicle={owner, plate_number}
        if(Id){
            VehicleServiceAPI.updateVehicle(Id,vehicle).then((response)=>{
                history('/vehicles');
            }).catch(error=>{
                console.log(error)
            })
        }else{
        VehicleServiceAPI.registerVehicle(vehicle).then((response)=>{
            console.log(response.data)
            if(response.data =="invalid number plate"){
                setError("Please enter a valid license number");
               
            }else{
                history('/vehicles');
                swal("Registered Successfully!", " ", "success");
            }
            
        }).catch(error=>{
            console.log(error)
        })
    }
    
    }
  
    useEffect(()=>{
        VehicleServiceAPI.getVehicleById(Id).then((response)=>{
            setOwner(response.data.owner)
            setPlate_number(response.data.plate_number)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title=()=>{
        if(Id){
            return <h2 className='text-center'>Update Vehicle List</h2>
        }else{
            return <h2 className='text-center'>Vehicle Registration</h2>
        }
    }
    
        return (
            <div>
                <br></br>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{width:"900px", margin:"auto",height:"450px"}}>
                            <br></br>
                            
                            <br></br>
                            <div className='card-body' style={{display:'flex',flexWrap:'wrap',alignContent: 'space-between'}}>
                                <div style={{width:"400px"}}>
                                        {
                                        title()
                                    }
                                    <br></br>
                                    <img src="images/OIP.jpg"></img>
                                </div>
                                <form style={{width:"400px", height:"200px" , margin:"auto"}}>
                                    <div className='form-group'>
                                        <label style={{fontFamily:"serif",fontWeight:"normal" , fontSize:"18px"}}>Owner Name: </label>
                                        <input placeholder='Owner Name' name='owner' className='form-control' style={{border: "2px solid #F4EEDB",borderRadius: "5px",padding: "10px 15px",margin:" 9px 0px"}} value={owner} onChange={(e)=>setOwner(e.target.value)}/>
                                    </div>
                                    <div className='form-group'>
                                        <label style={{fontFamily:"serif",fontWeight:"normal",fontSize:"18px"}}>Plate number: </label>
                                        <input placeholder='Plate number' name='plate_number' className='form-control' style={{border: "2px solid #F4EEDB",borderRadius: "5px",padding: "10px 15px",margin:" 9px 0px"}} value={plate_number} onChange={(e)=>setPlate_number(e.target.value)}/>
                                        
                                    {error && <div class="alert alert-danger alert-dismissible fade show" style={{fontSize:"13px", padding:" 5px 10px"}}><strong>error: </strong>{error}</div>}
                                    </div>
                                     <br></br>
                                    <button className='btn btn-success' onClick={(e)=>saveOrUpdateVehicle(e)}>Register</button>
                                    <Link to="/vehicles" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default AddVehicleComponent;