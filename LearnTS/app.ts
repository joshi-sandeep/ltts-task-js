interface Person {
    fullName: string;
    toString();
}

class Employee implements Person {
    empID: string;
    fullName: string;

    constructor(eID: string, name: string) {
        this.empID = eID;
        this.fullName = name;
    }

    toString() {
        console.log(`EMP ID of ${this.fullName}: ${this.empID}`);
    }
}

class Customer implements Person {
    custID: string;
    fullName: string;

    constructor(cID: string, name: string) {
        this.custID = cID;
        this.fullName = name;
    }

    toString() {
        console.log(`Customer ID of ${this.fullName}: ${this.custID}`);
    }
}


let employee: Person = new Employee("E001", "Kunal");
let customer: Person = new Customer("C001", "sandy");
console.log(employee);
employee.toString(); // prints employee details
customer.toString(); // prints customer details