const QueManagement = require("./HeadLineApp/QueManagement");
const Patients = require('./HeadLineApp/Patients');
const Doctors = require('./HeadLineApp/Doctors');   



describe('Test the que management system',()=> {

    test('test if i can add patients to the que',()=> {
        let pat = new Patients();
        let doc = new Doctors();
        let que = new QueManagement();

        //Register Doctors
        
        doc.registerDoctor("sam123", "sam", 22, "Cardiology", "0908779675", "0-24");
        doc.registerDoctor("sum122", "nonso",22,"surgeon", "09087398","1-2");
        doc.registerDoctor("DrSmith111", "Smith", 45, "surgery", "0908779675", "0-24");
        doc.registerDoctor("DrJones222", "Jones", 50, "Neurology", "09087398", "0-24");
        expect(doc.availableDoctors()).toEqual(['sam','Smith', "Jones"]);

        // register patients

        pat.registerPatient("emma123", "Emmanuel", 45, "0967534567", "fever");
        pat.registerPatient("matin12", "Matins", 23, "08076543456", "Headache");
        pat.registerPatient("Delight111", "Delight", 28, "090875578766", "Stomach ache");
        console.log(doc.availableDoctors());

        
        // book doctors
       pat.bookDoctor("Smith", "emma123", "tumor");
       expect(pat.getPatients()["emma123"].getDoctor()).toBe("Smith");
        expect(pat.getPatients()["emma123"].getStatus()).toBe("booked");
        
        pat.bookDoctor("Jones", "Delight111", "Stroke");
        expect(pat.getPatients()["Delight111"].getDoctor()).toBe("Jones");
        expect(pat.getPatients()["Delight111"].getStatus()).toBe("booked");
        expect(doc.getDoctors()["DrSmith111"].isBooked()).toBe(true);

        pat.bookDoctor("sam", "matin12","Heart Failure");
        expect(pat.getPatients()["matin12"].getDoctor()).toBe("sam");
        expect(pat.getPatients()["matin12"].getStatus()).toBe("booked");
        expect(doc.getDoctors()["sam123"].isBooked()).toBe(true);
        

        // add patients to queue
        que.addToQue("emma123");
        que.addToQue("matin12");
        que.addToQue("Delight111");
        expect(que.getQue().length).toBe(3);
        expect(que.getQue()).toEqual(["emma123", "matin12", "Delight111"]);

        // remove patients from queue
        que.removeFromQue("matin12");
        expect(que.getQue().length).toBe(2);
        expect(que.getQue()).toEqual(["emma123", "Delight111"]);
        expect(pat.getPatients()["matin12"].getStatus()).toBe("seen");
        expect(pat.getPatients()["matin12"].getDoctor()).toBe(undefined);
        expect(pat.getPatients()["matin12"].getReason()).toBe(undefined);

        que.removeFromQue("emma123");
        expect(que.getQue().length).toBe(1);
        expect(que.getQue()).toEqual(["Delight111"]);
        expect(pat.getPatients()["emma123"].getStatus()).toBe("seen");
        expect(pat.getPatients()["emma123"].getDoctor()).toBe(undefined);
        expect(pat.getPatients()["emma123"].getReason()).toBe(undefined);

        que.removeFromQue("Delight111");
        expect(que.getQue().length).toBe(0);
        expect(que.getQue()).toEqual([]);
        expect(pat.getPatients()["Delight111"].getStatus()).toBe("seen");
        expect(pat.getPatients()["Delight111"].getDoctor()).toBe(undefined);
        expect(pat.getPatients()["Delight111"].getReason()).toBe(undefined);

    });
});