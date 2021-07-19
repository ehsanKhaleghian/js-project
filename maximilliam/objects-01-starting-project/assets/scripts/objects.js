const person = {
    name: "javad",
    age: 30,
    hobbies: ["marijuanna", "club"],
    1.5: "first name",
    1.45: "last name",
    "first name": "Ehsan",
};

// person.isAdmin = true;

// console.log("first Person:::", person);

// delete person.isAdmin;

// console.log("second Person:::", person);

// console.log(person["hobbies"]);

// console.log("Person Object:::", person);

const numberObject = {
    1.2: "mohammad",
    1: "ehsan",
    2: "yassaman",
    0.5: "kian",
    0: "arsalan",
    thisTest() {
        console.log("This Test::::", this);
    },
    nameReturn() {
        this.thisTest();
    },
};

const expObject = {
    name: "jafar",
    family: "Panahi",
    profession: "director",
    title: "",
    testfun() {
        this.title = this.name;
    },
};

expObject.testfun();

console.log(expObject.title);
