const Doctors = require('./HeadLineApp/Doctors');

describe('Test doctors collections',()=> {


    test('test if i can add doctors to the list', ()=> {
        let reg = new Doctors();
        reg.registerDoctor("sam123", "sam", 22, "Cardiology", "0908779675", "1am - 10pm");
        expect(reg.getDoctors()["sam123"]).toEqual({
            name: 'sam',
            age: 22,
            department: 'Cardiology',
            contact: '0908779675',
            timeOfWork: '1am - 10pm'
        });
   

        reg.registerDoctor("sum122", "nonso",22,"surgion", "09087398","1pm - 2pm");
        
    });


    test('test if i can get the list of available doctors',()=> {
        let reg = new Doctors();
        reg.registerDoctor("sam123", "sam", 22, "Cardiology", "0908779675", "0-24");
        reg.registerDoctor("sum122", "nonso",22,"surgion", "09087398","1-2");
        expect(reg.availableDoctors()).toEqual(['sam']);
    });
});