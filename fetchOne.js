const students = {
  name: "sadnan",
  age: 29,
  movies: ["ami aka", "tumi nai"],
};

const Stringyfy = JSON.stringify(students);
console.log(Stringyfy);

const Parse = JSON.parse(Stringyfy);
console.log(Parse);

// fetch("url")
// .then(res =>res.json)
// .then(data =>console.log(data));

const keys = Object.keys(students);
console.log(keys);
const values = Object.values(students);
console.log(values);
const numbers = [10, 50, 30, 90];
numbers.forEach((number) => console.log(number));

numbers.map((number) => number * 2);
// console.log(number);

const products = [
  {
    name: "laptop",
    brands: "dell",
    price: 5000,
    color: "red",
  },
  {
    name: "watch",
    brands: "apple",
    price: 2000,
    color: "blue",
  },
  {
    name: "phone",
    brands: "iphone",
    price: 5600,
    color: "red",
  },
  {
    name: "camera",
    brands: "canon",
    price: 9000,
    color: "gray",
  },
];

const newProduct = {
  name: "bad",
  brands: "pak",
  price: 100,
  color: "nothing",
};

const SpreadProducts = [...products, newProduct];
console.log("newArray", SpreadProducts);

const RemoveProperty = SpreadProducts.filter(pro => pro.name !== "bad");
console.log(RemoveProperty)
