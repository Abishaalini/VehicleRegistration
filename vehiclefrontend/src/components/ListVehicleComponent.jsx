import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VehicleServiceAPI from '../services/VehicleServiceAPI';

const ListVehicleComponent=()=> {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         vehicles:[]
    //     }
    //     this.registerVehicle = this.registerVehicle.bind(this);
    //     this.editVehicle = this.editVehicle.bind(this);
    // }   
    
    const [vehicles,setVehicles]=useState([])
    useEffect(()=>{
        VehicleServiceAPI.getVehicles().then((response)=>{
            setVehicles(response.data)
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const deleteVehicle=(vId)=>{
        
       VehicleServiceAPI.deleteVehicle(vId).then((response)=>{
        VehicleServiceAPI.getVehicles().then((response)=>{
            setVehicles(response.data)
        }).catch(error=>{
            console.log(error);
        })
       }).catch(error=>{
        console.log(error);
    })
    }
   
        return (
            <div>
                <br></br>
                <h2 className="text-center" style={{fontSize:"25px"}}>List of Registered Vehicles</h2>
                <Link to="/add-vehicles" className='btn btn-primary mb-2'>Register Vehicle</Link>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>License Number</th> 
                                <th>License type</th>
                                <th>Vehicle Owner Name</th>
                                <th> Actions </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                vehicles.map(
                                    vehicle=>
                                    <tr key={vehicle.id}>
                                         <td>{vehicle.plate_number}</td>
                                         <td>{vehicle.type}</td>
                                         <td>{vehicle.owner}</td>
                                         <td>
                                            <Link className='btn btn-info' to={`/update-vehicles/${vehicle.id}`}>Update</Link>
                                            <button className='btn btn-danger' onClick={()=>deleteVehicle(vehicle.id)} style={{marginLeft:"50px"}}>Delete</button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>


            </div>
        )
    
}

export default ListVehicleComponent;