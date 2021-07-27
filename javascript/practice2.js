const showResult = document.getElementById("show");
let showingResult = true;

const sampleArray = ["ehsan", "khaleghian", 34, "developer"];
const [firstName, lastName, ...other] = sampleArray;

const resultHandler = () => {
    if (showingResult) {
        showResult.innerHTML = other;
        showingResult = !showingResult;
    } else {
        showResult.innerHTML = null;
        showingResult = !showingResult;
    }
};
// const ids=new Set([1,2,3])
// ids.add("d");
// console.log("IDS:::", ids);
//
// for (const entery of ids.entries()){
//     console.log("ENTERIESSSSS", entery)
// }
// console.log("ENTERIES:::::", ids.entries());

const person1 = { name: "Ehsan" };
const person2 = { name: "Mahdi" };
const person3 = { name: "jafar" };

const personData = new Map([
    [person1, { age: 34, gender: "male" }],
    [person2, { age: 21, gender: "male" }],
]);
personData.set(person3, [{ age: 120, gender: "dinoser" }, "10,000 BC"]);

console.log("Person Data Get::::", personData.get(person3));

for (const [key, value] of personData.entries()) {
    console.log("Key::::", key);
    console.log("Value::::", value);
}
