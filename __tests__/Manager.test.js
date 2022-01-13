const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an manager object with the properties given for name, employeeId, email, and officeNum', () => {
            const name = 'Sean';
            const employeeId = 10;
            const email = 'test@domain.com';
            officeNum = 210;

            const testManager = new Manager(name, employeeId, email, officeNum);

            expect(testManager.getName()).toEqual(name);
            expect(testManager.getId()).toEqual(employeeId);
            expect(testManager.getEmail()).toEqual(email);
            expect(testManager.getOfficeNum()).toEqual(officeNum);
        });
    });

    describe('Get Role', () => {
        it('should return "Manager" for the getRole() method', () => {
            const testManager = new Manager('Dave', 10, 'd@c.co', 101);

            expect(testManager.getRole()).toEqual('Manager');
        })
    });
});
