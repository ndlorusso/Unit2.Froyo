// create prompt for froyo flavors
// store the values  
// group the values  
// use the loop  
// write the numbers to the objest 
// log the array SVGStringList

const userInputString = prompt(
    "Enter a list of froyo flavors",
    "vanilla,chocolate,cherry,mintchip,mocha"
  );

// Split the string of numbers into an array of strings.
const flavors = userInputString.split(",").map((s) => s.trim());
console.log(flavors);

const obj = {};
for (let flavor of flavors) {
  flavor in obj ? (obj[flavor] = obj[flavor] + 1) : (obj[flavor] = 1);
}
console.table(obj);


// const obj = {};
// for ( let i = 0; i < flavors.length; i++) {
//   flavors[i] in obj;
//   (obj[flavors[i]] += 1);
//   (obj[flavors[i]] = 1);
// }
// console.table(obj);

// function countFlavors(flavors) {
//   const obj = {};
//   for (let i = 0; i < flavors.length; i++) {
//     if (flavors[i] in obj) {
//       obj[flavors[i]] += 1;
//     } else {
//       obj[flavors[i]] = 1;
//     }
//   }
//   console.table(obj);
// }


// let flavors = [ "vanilla,chocolate,cherry,mintchip,mocha"]
// for (let i = 0; i < flavors.length; i++) {
//   const obj = {}
//   flavors [i] in obj ? console.log('flavor exists') : (obj[flavors[i]] = 1);
// }

// const CreatSimpleObject = (key, value) => {
//   const obj = {};
//   obj[key] = value ;
//   return obj 
// }

// count how many of the same answer
// const flavor = {};
// if (stringArray[] in stringArray)
// for (let i = 0; i = )

// const countDupes = (arr) => {
//     const counts = new Map();
//     arr.forEach(stringArray) => {
//         counts.set(value, (counts.get(value) ?? 0) + 1);
//     };
//     return Object.fromEntries(counts);
// };
