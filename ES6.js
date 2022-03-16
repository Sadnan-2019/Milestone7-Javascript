const students = {
  name: "sadnan",
  age: 29,
  movies: [
    {
      releasedate: "01-2-2002",
    },
  ],
};

const about = `students: ${students.name} has age is : ${students.age} movies release date ${students.movies[0].releasedate}`;

console.log(about);

const AddNumbers = (newAdd) => newAdd + 65;
const IsEven = (even) => even % 2 == 0;
const ThreeNumber =(x,y,z)=>x*y*z;
const doMath = (num1,num2) =>{

          let result=0;
          result = num1 * num2;
          return result;
}


const math =doMath(50,30);
console.log(math)


const numbers =[55,20,33,1];

const NewNumbers=[...numbers,9890]
numbers.push(10,500,600)
console.log(numbers)
console.log(NewNumbers)