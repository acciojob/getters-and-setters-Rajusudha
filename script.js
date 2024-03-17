//complete this code
// class Person {
// 	constructor(name, age){
// 		this._name=name,
// 	    this._age=age,
// 	}
// 	get name(){
// 		return this._name,
// 	}
// 	set age(age){
// 		this._age=age
// 	}
// }

// const person = new Person("John", 25);
// console.log(person.name);

// class Student extends Person {
// 	study(){
// 		console.log(`${this.name} is studying`)
// 	}
// }

// class Teacher extends Person {
// 	teach(){
// 		console.log(`${this.name} is teaching`)
// 	}
// }

// Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;







// Messages addressed to "Meeting Group Chat" will also appear in the meeting group chat in Team Chat

// You  to  Vishal Acciojob (direct message) 12:44
// hello sir
// Muzzakir SHAIKH joined as a guest
// Muzzakir SHAIKH left
// Katha More joined as a guest

// Vishal Acciojob  to  You (direct message) 12:57
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {any} age
   */
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
