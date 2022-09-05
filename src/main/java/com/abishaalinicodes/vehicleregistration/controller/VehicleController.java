package com.abishaalinicodes.vehicleregistration.controller;

import com.abishaalinicodes.vehicleregistration.exception.VehicleNotFoundException;
import com.abishaalinicodes.vehicleregistration.model.Vehicle;
import com.abishaalinicodes.vehicleregistration.repository.VehicleRepository;
import com.abishaalinicodes.vehicleregistration.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/registration")

public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private VehicleRepository vehicleRepository;

    @PostMapping("/vehicles")
    public  String add(@RequestBody Vehicle vehicle) {
        if(vehicleService.registerVehicle(vehicle)==null){
            return "invalid number plate";
        }
           vehicleService.registerVehicle(vehicle);
           return "New vehicle is registered" ;
    }

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles(){
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/vehicles/{Id}")
    Vehicle getVehicleById(@PathVariable int Id){
        return vehicleRepository.findById(Id)
                .orElseThrow(()->new VehicleNotFoundException(Id));

    }

    @PutMapping("/vehicles/{Id}")
    Vehicle updateVehicle(@RequestBody Vehicle vehicle,@PathVariable int Id){
        return vehicleRepository.findById(Id)
                .map(vehicle1 ->{
                    vehicle1.setOwner(vehicle.getOwner());
                    vehicle1.setPlate_number(vehicle.getPlate_number());
                    return vehicleRepository.save(vehicle1);
                } ).orElseThrow(()->new VehicleNotFoundException(Id));
    }

    @DeleteMapping("/vehicles/{Id}")
    String deleteVehicle(@PathVariable int Id){
        if (!vehicleRepository.existsById(Id)) {

            throw  new VehicleNotFoundException(Id);
        }
        vehicleRepository.deleteById(Id);
        return "Vehicle with id "+ Id +" has been deleted successfully";
    }


}
