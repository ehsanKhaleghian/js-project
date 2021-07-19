// const item = "testItem";
// item;

// const personItem = new Map();

// personItem.set(
//     { name: "javad", family: "shaker" },
//     { name: "Mahdi", family: "Javan" },
//     { name: "Ehsan", family: "Khaleghian" }
// );
// personItem.set(
//     { name: "javad", family: "shaker" },
//     { name: "Ehsan", family: "Khaleghian" }
// );
// personItem.set(
//     { name: "asghar", family: "shaker" },
//     { name: "mamad", family: "Khaleghian" }
// );

// for (const item of personItem.entries()) {
//     console.log(`${item}:::`, item);
// }

// const setterGetter = {
//     name: "ehsan",
//     family: "Khaleghian",
//     job: "",
//     set jober(val) {
//         this.job = val;
//     },
//     get jober() {
//         return this.job;
//     },
// };

// setterGetter.jober = "programmer";
// console.log(`${setterGetter}:::`, setterGetter.job);

// console.log(`setterGetter:::`, setterGett

class UsersClass {
    constructor(name, family, job) {
        this.name = name;
        this.family = family;
        this.job = job;
    }
}

const users = new UsersClass("Ehsan", "Khaleghian", "Developer");
const app = document.getElementById("app");

class RenderUser {
    constructor(user) {
        this.user = user;
    }

    clickHandler() {
        console.log("I am Clicked", this);
    }

    render() {
        app.innerHTML = `
        <h3>${this.user.name}</h3>
        <h3>${this.user.family}</h3>
        <h3>${this.user.job}</h3>
        <h3>${this.user.jafar}</h3>
        <button>Test Click</button>
        `;
        const btn = app.querySelector("button");
        btn.addEventListener("click", this.clickHandler.bind(this));
    }
}

const newUsersRender = new RenderUser(users);

newUsersRender.render();
