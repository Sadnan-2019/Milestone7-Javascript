console.log("lksjflklk")
let seconds =0 ;


const setIntervalme = setInterval(() => {

                    seconds ++
          console.log(seconds,"ami jiaga")
          if(seconds >15){

                    clearInterval(setIntervalme)
          }
},1000)

console.log("I am Superwoman");

setTimeout(() =>console.log("I am Superman"),1000)


const name = 'Hero';const age = 34;
const person = {name, age}; console.log(person);

let person1 =null;
console.log(person1 ? person1 : "person is null")