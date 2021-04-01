var Employee = /** @class */ (function () {
    function Employee(eID, name) {
        this.empID = eID;
        this.fullName = name;
    }
    Employee.prototype.toString = function () {
        console.log("EMP ID of " + this.fullName + ": " + this.empID);
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer(cID, name) {
        this.custID = cID;
        this.fullName = name;
    }
    Customer.prototype.toString = function () {
        console.log("Customer ID of " + this.fullName + ": " + this.custID);
    };
    return Customer;
}());
var employee = new Employee("E001", "Kunal");
var customer = new Customer("C001", "sandy");
console.log(employee);
employee.toString(); // prints employee details
customer.toString(); // prints customer details
