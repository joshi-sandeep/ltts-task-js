//public
class Employee {
    public empCode: number;
    empName: string;
}

var emp = new Employee();
emp.empCode = 123;
emp.empName = "sandy";

//private
class Person {
    private perCode: number;
    perName: string;
}

var per = new Person();
per.perCode = 123; // Compiler Error
per.perName = "Swati";//OK


//protected

class Engineer {
    public engName: string;
    protected engCode: number;

    constructor(name: string, code: number){
        this.engName = name;
        this.engCode = code;
    }
}

class SuperEngineer extends Engineer{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let eng = new SuperEngineer("John Smith", 123, "Engineer");
engObj.empCode; //Compiler Error