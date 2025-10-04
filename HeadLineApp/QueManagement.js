// const Doctors = require("./Doctor");
const Patients = require("./Patients");

class QueManagement{
    static queue = [];
    static seenPatients = [];


    // viewPatientsProblems(){
    //     for (const patient in Patients.patients){
    //         console.log(`Patient User Name: ${patient}, Name: ${Patients.patients[patient].getName()}, Problem: ${Patients.patients[patient].getReason()} Doctor: ${Patients.patients[patient].getDoctor()}`);
    //      }
    // }

    addToQue(patientUserName){
        for (const patient in Patients.patients){
            if (patient == patientUserName && Patients.patients[patient].getStatus() == "booked"){
                if (!QueManagement.queue.includes(patientUserName)){
                    QueManagement.queue.push(patientUserName);
                    Patients.patients[patient].setStatus(`in-que : number ${QueManagement.queue.indexOf(patientUserName) + 1}`);
                    return "Patient added to que";
                }
                else{
                    throw new Error("Patient already in que");
                }
            }
        }
        throw new Error("Patient not registered or already booked with a doctor");
    }

    removeFromQue(patientUserName){
        const index = QueManagement.queue.indexOf(patientUserName);
        if (index > -1){
            QueManagement.queue.splice(index,1);
            this.markPatientAsSeen(patientUserName);
        }
        else{
            throw new Error("Patient not in que");
        }
    }

    getQue(){
        return QueManagement.queue;
    }

    markPatientAsSeen(patientUserName){
        for (const patient in Patients.patients){
            if (patient == patientUserName){
                Patients.patients[patient].setStatus("seen");
                QueManagement.seenPatients.push(patientUserName);
                Patients.patients[patient].setDoctor(undefined);
                Patients.patients[patient].setReason(undefined);
                return "Patient marked as seen";
                
            }
        }
    }

    registerSeenPatients(patientUserName, doctorName, reason){
        if (QueManagement.seenPatients.includes(patientUserName)) {
            Patients.patients[patientUserName].setStatus("no-show");
            const book = new Patients();
            book.bookDoctor(doctorName, patientUserName, reason);
            return "Patient re-registered and booked with doctor";
        }
        else{
            throw new Error("Patient has not been seen yet");
        }

    }

    getSeenPatients(){
        return QueManagement.seenPatients;
    }

}

module.exports = QueManagement;