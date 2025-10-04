const Patients = require('./HeadLineApp/Patients');
const Doctors = require('./HeadLineApp/Doctors');   

describe('Test Patients collection',()=> {

    test('test if i can add patients to the list', ()=> {
        let reg = new Patients();
        reg.registerPatient("John123", "john", 30, "09086568767", "For headache");
        expect(Object.keys(reg.getPatients()).length).toBe(1);
        expect(reg.getPatients()["John123"]).toEqual({
            name: 'john',
            age: 30,
            contact: '09086568767',
            reason: 'For headache',
            status: 'no-show',
            doctor: undefined
        });

    });

    test('test to book a doctor for a patient',()=> {
        let reg = new Patients();
        reg.registerPatient("John123", "john", 30, "09086568767", "For headache");
        reg.registerPatient("Doe122", "doe", 25, "09086568768", "For fever");

    });



        });

        describe('Test booking a doctor for a patient',()=> {

            test('test to book a doctor for a patient',()=> {
                let reg = new Patients();
                let doc = new Doctors();
                doc.registerDoctor("DrSmith", "Dr. Smith", 45, "Cardiology", "0908779675", "0-24");
                doc.registerDoctor("DrJones", "Dr. Jones", 50, "Neurology", "09087398", "1-2");

                reg.registerPatient("John123", "john", 30, "09086568767", "For headache");
                reg.registerPatient("Doe122", "doe", 25, "09086568768", "For fever");
                console.log(doc.availableDoctors());
                reg.bookDoctor("Dr. Smith", "John123");
                expect(reg.getPatients()["John123"].getDoctor()).toBe("Dr. Smith");
                expect(reg.getPatients()["John123"].getStatus()).toBe("booked");
            });
        });