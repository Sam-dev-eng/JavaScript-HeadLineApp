const Patient = require("./Patient");
const Doctors = require("./Doctors");

class Patients{
    static patients = {};

    registerPatient(username, name, age, contact, reason){
        const patient = new Patient(name, age, contact, reason);
            Patients.patients[username] = patient;
       
    }
    getPatients(){
        return Patients.patients;
    }

    bookDoctor(doctorName, patientUserName, reason){
        if (this.DoctorIsAvaliable(doctorName) && this.validatePatient(patientUserName) && !this.DoctorIsBooked(doctorName) ){
            console.log("Booking doctor...");
            for (const doctor in Doctors.doctors){
                if (Doctors.doctors[doctor].getName() == doctorName){
                    Doctors.doctors[doctor].setBooked(true);
                }
            }
                        for (const patient in Patients.patients){
                        if (patient === patientUserName){
                            Patients.patients[patient].setDoctor(doctorName);
                            Patients.patients[patient].setStatus("booked");
                            console.log(patient);
                            Patients.patients[patient].setReason(reason);
                        }
                    }
            return "Doctor booked successfully";
                }else{
            return "Cannot book doctor";
        }
        }
    
    
    DoctorIsAvaliable(doctorName){
        console.log(Doctors.availableDoctors);
        for (let count = 0; count < Doctors.availableDoctors.length; count++){
                if (Doctors.availableDoctors[count] == doctorName){
                    return true;
            }
        }
        throw new Error("Doctor is not available");
    }

    DoctorIsBooked(doctorName){
        for (const doctor in Doctors.doctors){
            if (Doctors.doctors[doctor].getName() == doctorName && Doctors.doctors[doctor].isBooked()){
                 throw new Error("Doctor is already booked");
            }
            
        } 
        return false;
    }
        
    

    validatePatient(patientUserName){
        for (const patient in Patients.patients){
            if (patient == patientUserName && Patients.patients[patient].getStatus() == "no-show"){
                return true;
            }
        }
        throw new Error("Patient does not exist or has been seen");
        }
    }

module.exports = Patients;