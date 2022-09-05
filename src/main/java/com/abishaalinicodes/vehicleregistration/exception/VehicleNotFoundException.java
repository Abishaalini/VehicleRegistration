package com.abishaalinicodes.vehicleregistration.exception;

public class VehicleNotFoundException extends RuntimeException{
    public VehicleNotFoundException(int Id){
        super("Could not found the vehicle with id "+ Id);
    }
}
