const Doctor = require('./HeadLineApp/Doctor');

describe('Test my Doctor', ()=> {

    test('test the default name of the doctor', () => {
        let doctor = new Doctor();
        expect(doctor.getName()).toBe(undefined);
    });

    test('test if i can change the name of the doctor',()=> {

        let doctor = new Doctor();
        doctor.setName("Sam");
        expect(doctor.getName()).toBe("Sam");
    });

    test('test the default age of my doctor', () => {

        let doctor = new Doctor();
        expect(doctor.getAge()).toBe(undefined);
    });

    test('test if i can change the age of the doctor', ()=>{
        let doctor = new Doctor();
        doctor.setAge(22);
        expect(doctor.getAge()).toBe(22);
    });

    test('test if i can set the department of the doctor',()=> {
        let doc = new Doctor();
        doc.setDepartment("Cardiology");
        expect(doc.getDepartment()).toBe("Cardiology");

    });

    test('test if i can set doctors number',()=> {
        let doc = new Doctor();
        doc.setContact("08060949292");
        expect(doc.getContact()).toBe("08060949292");
    });
    test('test if i can set the time of work for the doctor',()=> {
        let doc = new Doctor();
        doc.setTimeOfWork("1am - 10pm");
        expect(doc.getTimeOfWork()).toBe("1am - 10pm");
    });

    test('test if i can set the doctors name age department and all with the constructor',()=> {
        let doc = new Doctor("Sam", 22, "Cardiology", "08060949292", "1am - 10pm");
        expect(doc.getName()).toBe("Sam");
        expect(doc.getAge()).toBe(22);
        expect(doc.getDepartment()).toBe("Cardiology");
        expect(doc.getContact()).toBe("08060949292");
        expect(doc.getTimeOfWork()).toBe("1am - 10pm");
    });

}); 



