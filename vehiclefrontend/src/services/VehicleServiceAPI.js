import axios from 'axios';
const VEHICLE_API_BASE_URL="http://localhost:8080/registration/vehicles";

class VehicleServiceAPI{
   getVehicles(){
     return axios.get(VEHICLE_API_BASE_URL);
   }

   registerVehicle(vehicle){
    return axios.post(VEHICLE_API_BASE_URL,vehicle);
   }

   getVehicleById(vId){
    return axios.get("http://localhost:8080/registration/vehicles/" + vId);
   }

   updateVehicle(vId,vehicle){
    return axios.put(VEHICLE_API_BASE_URL + '/' + vId, vehicle);
   }

   deleteVehicle(vId){
    return axios.delete(VEHICLE_API_BASE_URL + '/' + vId);
   }
}

export default new VehicleServiceAPI()