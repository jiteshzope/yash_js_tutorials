console.log("Classes and Objects javascript file execution start");

class Person{
    name;
    age;
    gender;
    dob;
    color;

    constructor(a,b,c,d,e){
        this.name = a;
        this.age = b;
        this.gender = c;
        this.dob = d;
        this.color = e;
    }

}

let person1 = new Person('jitesh', '27', 'male', '26', 'white');
console.log(person1);

let person2 = new Person('yash', '17', 'male', '90', 'black');
console.log(person2);

class Student {
    rollName;
    pen;
    desk_no;
    studentName;

    static country = 'INdia';

    constructor(a, b, c, e) {


        this.rollName = a;

        this.pen = b;

        this.desk_no = c;

        this.studentName = e;

    }

    getInfo(){
        let info = "Name : "+this.studentName+" Pen : "+this.pen+" Desk No : "+this.desk_no+" Roll name : "+this.rollName+" country : "+Student.country;
        return info;
    }

}

// ctrl + k and ctrl + f is used to format the selected code
// Ctrl+Shift+I to format the entire file


let student1 = new Student('57', '2', '3', 'yash');
console.log(student1);

let student2 = new Student('34', '5', '8', 'mangesh');
console.log(student2);

// Accessing object properties
console.log(student1.studentName);
console.log(student1.desk_no);
console.log(student1.rollName);
console.log(student1.pen);

// accessing object method
console.log(student1.getInfo());
console.log(student2.getInfo());

// Accessing static properties
Student.country = 'Pak';
console.log(Student.country);



