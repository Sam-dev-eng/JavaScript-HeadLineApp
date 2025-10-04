const Doctor =  require('./Doctor');

 class Doctors{
    
    static doctors = {};
    static availableDoctors = [];

    registerDoctor(username, name , age , department, contact, timeOfWork){
                const doctor = new Doctor(name, age, department, contact, timeOfWork);
            Doctors.doctors[username] = doctor;
        
    }
    getDoctors(){
        return  Doctors.doctors;
    }

    availableDoctors() {  
        let currentHour = new Date().getHours();
        
        for (const doctor in Doctors.doctors){
            let endWork = Number(Doctors.doctors[doctor].getTimeOfWork().match(/-(\d+)/)[1]);
            let startWork = Number(Doctors.doctors[doctor].getTimeOfWork().match(/(\d+)/)[1]);  
            if ( startWork <= currentHour && currentHour < endWork){ 
                Doctors.availableDoctors.push(Doctors.doctors[doctor].getName());
            }
        }
    return Doctors.availableDoctors;
    } 
}
module.exports = Doctors;
