const Patient = require('./HeadLineApp/Patient');


describe('test The patients function',()=> {

    test('test the set name function',()=> {
        let patient = new Patient();
        patient.setName("John");
        expect(patient.getName()).toBe("John");
    });

    test('test the set age function',()=> {
        let patient = new Patient();
        patient.setAge(30);
        expect(patient.getAge()).toBe(30);
    });

    test('test the set contact function', ()=> {
        let patient = new Patient();
        patient.setContact("09086568767");
        expect(patient.getContact()).toBe("09086568767");
    });

    test('test the reason function',()=> {
        let pat = new Patient();
        pat.setReason("For headache");
        expect(pat.getReason()).toBe("For headache");
    });

    test('test the status function',()=> {
        let pat = new Patient();
        expect(pat.getStatus()).toBe("no-show");
        pat.setStatus("seen");
        expect(pat.getStatus()).toBe("seen");
    });

    test('test the set doctor function',()=> {
        let pat = new Patient();
        pat.setDoctor("sam");
        expect(pat.getDoctor()).toBe("sam");
    });
});