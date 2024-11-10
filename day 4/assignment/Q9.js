//Q9. Basic Person Management System with prototypical in inheritance
// Step 1: Create a constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add an introduce method to Person.prototype
Person.prototype.introduce = function() {
    console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Step 3: Create a constructor function for Employee that inherits from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;
}

// Step 4: Ensure Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

// Step 5: Add a work method to Employee.prototype
Employee.prototype.work = function() {
    console.log(this.name + " is working as a " + this.jobTitle + ".");
};



// Create an instance of Person
var person = new Person("Alice", 30);
person.introduce(); 

// Create an instance of Employee
var employee = new Employee("Bob", 25, "Software Engineer");
employee.introduce(); 
employee.work();