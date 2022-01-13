const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an intern object with the properties given for name, employeeId, email, and github', () => {
            const name = 'Sean';
            const employeeId = 10;
            const email = 'test@domain.com';
            school = 'ECU';

            const testIntern = new Intern(name, employeeId, email, school);

            expect(testIntern.getName()).toEqual(name);
            expect(testIntern.getId()).toEqual(employeeId);
            expect(testIntern.getEmail()).toEqual(email);
            expect(testIntern.getSchool()).toEqual(school);
        });
    });

    describe('Get Role', () => {
        it('should return "Intern" for the getRole() method', () => {
            const testIntern = new Intern('Dave', 10, 'd@c.co');

            expect(testIntern.getRole()).toEqual('Intern');
        })
    });
});
