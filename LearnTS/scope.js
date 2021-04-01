var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//public
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp = new Employee();
emp.empCode = 123;
emp.empName = "sandy";
//private
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var per = new Person();
per.perCode = 123; // Compiler Error
per.perName = "Swati"; //OK
//protected
var Engineer = /** @class */ (function () {
    function Engineer(name, code) {
        this.engName = name;
        this.engCode = code;
    }
    return Engineer;
}());
var SuperEngineer = /** @class */ (function (_super) {
    __extends(SuperEngineer, _super);
    function SuperEngineer(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        return _this;
    }
    return SuperEngineer;
}(Engineer));
var eng = new SuperEngineer("John Smith", 123, "Engineer");
engObj.empCode; //Compiler Error
