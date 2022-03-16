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


const brands =products.map(product =>product.brands );
console.log(brands);
const prices =products.map(price =>price.price );
console.log(prices);


 products.forEach(product=>console.log(product.color));
 products.forEach(product=>console.log(product.name));

 const cheap =products.filter(product =>product.price <=5000)
 console.log(cheap)

 const speciFicFilter =products.filter(product =>product.name.includes("a"));
 console.log('specific',speciFicFilter);

 const speciFicFind =products.find(product =>product.name.includes("a"));
 console.log('specificfind',speciFicFind);