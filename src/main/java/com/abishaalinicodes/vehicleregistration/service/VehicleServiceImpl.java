package com.abishaalinicodes.vehicleregistration.service;

import com.abishaalinicodes.vehicleregistration.model.Vehicle;
import com.abishaalinicodes.vehicleregistration.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;
    @Override
    public Vehicle registerVehicle(Vehicle vehicle) {
        vehicle.setType(TypeIdentifier(vehicle.getPlate_number()));
        if(validatenumberplate(vehicle.getPlate_number())=="Invalid"){
            return null;
        }
        vehicle.setPlate_number(validatenumberplate(vehicle.getPlate_number()));
        return vehicleRepository.save(vehicle);
    }
    @Override
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public String validatenumberplate(String inputnumplate){
        String pattern1 = "[A-Z]?[A-Z]?[\s]*[A-Z]{2,4}[\s]*[\\-][\s]*[0-9]{4}";
        String pattern2 = "[0-9]{2,4}[\s]*[\\-][\s]*[0-9]{4}";
        String pattern3 = "[0-9]{1,3}[\s]*ශ්\u200Dරි[\s]*[0-9]{4}";
        boolean matches1 = Pattern.matches(pattern1, inputnumplate);
        boolean matches2 = Pattern.matches(pattern2, inputnumplate);
        boolean matches3 = Pattern.matches(pattern3, inputnumplate);
        String m1 = String.valueOf(matches1);
        String m2 = String.valueOf(matches2);
        String m3 = String.valueOf(matches3);
        if(m1=="true" || m2=="true" || m3=="true"){
            return inputnumplate;
        }
        return "Invalid";
    }

    public String TypeIdentifier(String input){
        String pattern1 = "[A-Z]?[A-Z]?[\s]*[A-Z]{2,4}[\s]*[\\-][\s]*[0-9]{4}";
        String pattern2 = "[0-9]{2,4}[\s]*[\\-][\s]*[0-9]{4}";
        String pattern3 = "[0-9]{1,3}[\s]*ශ්\u200Dරි[\s]*[0-9]{4}";
        boolean matches1 = Pattern.matches(pattern1, input);
        boolean matches2 = Pattern.matches(pattern2, input);
        boolean matches3 = Pattern.matches(pattern3, input);
        String m1 = String.valueOf(matches1);
        String m2 = String.valueOf(matches2);
        String m3 = String.valueOf(matches3);
        if(m1 =="true"){
            return "Modern";
        }else if(m2=="true"){
            return "Old";
        }else if(m3=="true"){
            return "Vintage";
        }else{
            return null;
        }

    }
}
