// Creating object using literal syntax
const student1 = {
    name: "Ninad Rao",
    className: "D15A",
    rollNo: 24,
};

console.log("Student 1: ", student1);

// Creating object using constructor function
class Student {
    constructor(uname, className, rollNo) {
        this.uname = uname;
        this.className = className;
        this.rollNo = rollNo;
    }
}

const student2 = new Student("Ninad Rao", "D15A", 58);
console.log("Student 2: ", student2);

// Use of Prototype
Student.prototype.college = "VESIT";
console.log("Student 2: ", student2);

document.getElementById("printName").innerHTML = student2.uname;
document.getElementById("printClass").innerHTML = student2.className;
document.getElementById("printRoll").innerHTML = student2.rollNo;

// Generating an Exception
function checkError() {
    const value = document.getElementById("checkError").value;
    console.log(value);

    if (isNaN(value) || value == 0) {
        throw new Error("Invalid Input");
    } 
    else {
        console.log("Valid Input");
    }
}