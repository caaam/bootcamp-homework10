const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an employee object with the properties given for name, employeeId, and email", () => {
            const name = "Sean";
            const employeeId = 10;
            const email = "test@domain.com";

            const testEmployee = new Employee(name, employeeId, email);

            expect(testEmployee.getName()).toEqual(name);
            expect(testEmployee.getId()).toEqual(employeeId);
            expect(testEmployee.getEmail()).toEqual(email);
        });
    });

    describe('Get Role', () => {
        it('should return "Employee" for the getRole() method', () => {
            const testEmployee = new Employee('Dave', 10, 'd@c.co');

            expect(testEmployee.getRole()).toEqual('Employee');
        })
    });
});
