const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an engineer object with the properties given for name, employeeId, email, and github', () => {
            const name = 'Sean';
            const employeeId = 10;
            const email = 'test@domain.com';
            github = 'seanc';

            const testEngineer = new Engineer(name, employeeId, email, github);

            expect(testEngineer.getName()).toEqual(name);
            expect(testEngineer.getId()).toEqual(employeeId);
            expect(testEngineer.getEmail()).toEqual(email);
            expect(testEngineer.getGithub()).toEqual(github);
        });
    });

    describe('Get Role', () => {
        it('should return "Engineer" for the getRole() method', () => {
            const testEngineer = new Engineer('Dave', 10, 'd@c.co');

            expect(testEngineer.getRole()).toEqual('Engineer');
        })
    });
});
