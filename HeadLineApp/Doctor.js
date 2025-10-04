class Doctor {
    #name;
    #age;
    #contact;
    #department;
    #timeOfWork;
    #booked = false;

    constructor(name , age , department, contact, timeOfWork){
        this.name = name;
        this.age = age;
        this.department = department;
        this.contact = contact;
        this.timeOfWork = timeOfWork;
    }

     getName() {
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    getDepartment(){
        return this.department;
    }
    setDepartment(department){
        this.department = department;
    }
    setContact(contact){
        this.contact = contact;
    }
    getContact(){
        return this.contact;
    }
    setTimeOfWork(time){
        this.timeOfWork = time;
    }

    getTimeOfWork(){
        return this.timeOfWork;
    }
    getDetails(){
        return `Dr. ${this.name} is ${this.age} years old, works in the ${this.department} department, can be contacted via ${this.contact}, and works from ${this.timeOfWork}.`;
    }
    setBooked(status){
        this.booked = status;
    }
    isBooked(){
        return this.booked;
    }
}
module.exports = Doctor;
