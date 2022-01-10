const Employee = require('./Employee.js');

class Manager extends Employee {
	constructor(name, id, email, officeNum) {
		this.officeNum = officeNum;
		super(name, id, email);
	}

	getOfficeNum() {
		return this.officeNum;
	}

	getRole() {
		return "Manager";
	}
}

module.exports = Manager;