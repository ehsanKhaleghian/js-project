let changeClassOption = true;
const ul = document.querySelector("ul");
ul.className = "mamad";

let firstEleman;
let secondEleman;

const classes = [
    (firstClass = {
        backgroundColor: "red",
    }),
    (secondClass = {
        backgroundColor: "green",
    }),
    (thirdClass = {
        backgroundColor: "yellow",
    }),
    (forthClass = {
        backgroundColor: "purple",
    }),
];

const takeKey = (obj) => {
    firstEleman = Object.keys(obj)[0];
};
const takeValue = (obj) => {
    secondEleman = Object.values(obj)[0];
};

const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.onclick = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 5) {
        console.log(firstEleman);
        takeKey(classes[0]);
        takeValue(classes[0]);
        console.log("22", secondEleman);
        ul.style.firstEleman = `${secondEleman}`;
    } else {
        takeKey(classes[0]);
        takeValue(classes[0]);
        ul.style.firstEleman = `${secondEleman}`;
    }
};

const prices = [1, 2, 3, 4];
const price = prices.reduce((preV, curV, curI, prices) => preV + curV * 2, 0);
console.log("price:::", price);
