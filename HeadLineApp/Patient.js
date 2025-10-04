
class Patient{
    #name;
    #age;
    #contact;
    #reason;
    #Doctor;
    status = "no-show";

    constructor(name, age, contact, reason){
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.reason = reason;
        
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge() {
        return this.age;
    }

    setContact(contact){
        this.contact = contact;
    }
    getContact(){
        return this.contact;
    }
    setReason(reason){
        this.reason = reason;
    }
    getReason(){
        return this.reason;
    }
    setDoctor(Doctor){
        this.Doctor = Doctor;
    }
    getDoctor(){
        return this.Doctor;
    }
    setStatus(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }

}
module.exports = Patient;
      