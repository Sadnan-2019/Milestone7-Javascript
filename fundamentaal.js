const fathername = "arnold";
let rainy = "session";
rainy = "rainy";

// conditional operator::: ===,!==,>=,<=,>,<
if (fathername === "arnold" && rainy === "rainy") {
  console.log("its true");
} else {
  console.log("false");
}

// Array,index,length

numbers = [12, 22, 55, 36];

numbers[0] = 22;
console.log(numbers[0]);

for (let i = 0; i < numbers.length; i++) {
  number = numbers[i];
  console.log(number);
}

const AddNumbers = (number1, number2) => {
  let result = 0;

  result = number1 + number2;
  return result;
};

const NewNumber = AddNumbers(20, 20);
console.log(NewNumber);

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
