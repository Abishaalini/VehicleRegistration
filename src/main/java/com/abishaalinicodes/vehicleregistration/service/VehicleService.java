package com.abishaalinicodes.vehicleregistration.service;

import com.abishaalinicodes.vehicleregistration.model.Vehicle;
import com.abishaalinicodes.vehicleregistration.repository.VehicleRepository;

import java.util.List;

public interface VehicleService {
    public Vehicle registerVehicle(Vehicle vehicle);
    public List<Vehicle> getAllVehicles();

}
