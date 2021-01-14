const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //Tesla
console.log(otherRandomCar) //Mercedes

console.log("------------------------------")

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); //unknown or undefined
console.log(otherName); //Elon

console.log("------------------------------")

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //doesn't exist from person so undefined

console.log("------------------------------")

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers;//2
//Predict the output
console.log(first == second); //false
console.log(first == third);//true

console.log("------------------------------")

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); // 1 5 1 8 3 3
console.log(secondKey[0]);//1
console.log(willThisWork);// 5


console.log("------------------------------")

//REST AND SPREAD
// const person2 = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//       {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//       },
//       {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//       }
//     ],
//     createdAt: 1543945177623
//   };
//   const { firstName, lastName, ...attributes } = person2;
//   console.log(attributes)