class Asghar {
    constructor() {
        this.title = "asghar title";
    }
    consoleAsghar() {
        console.log(this.title);
        console.log("THIS:::::::", this);
    }

    #privateMethod() {
        console.log("MAMAD NOBARIIIII");
    }
}

console.log("ASGHAR::::", new Asghar());

const shohre = new Asghar();

console.log("SHOHRE:::", Asghar.prototype === shohre.__proto__);

/* -------------------------------------------------------------------------- */

const jafar = document.getElementById("app");

console.log("Jafar::::", jafar);
console.log("Jafar DATA SET::::", jafar.dataset);

jafar.setAttribute("data-ehsan-agha", "agha Ehsan");

console.log("Jafar DATA SET::::", jafar.dataset.ehsanAgha);

jafar.dataset.mahdiJavan = "Gharib dooosti";

console.log("Jafar::::", jafar);

jafar.style = "width:500px;height:800px;background-color:red";

jafar.style["backgroundColor"] = "green";

const jafarParent = jafar.parentElement;
jafarParent.style =
    "max-height:200px;max-width:200px;overflow:scroll;padding:80px";

console.log(`jafarParent:::`, jafarParent);

console.log("jafar.clientHeight:::", jafar.clientHeight);
console.log("jafar.getBoundingClientRect():::", jafar.getBoundingClientRect());
console.log("jafar.clientWidth:::", jafar.clientWidth);
