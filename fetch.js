console.log("another one")

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(res => res.json())
.then(data =>console.log(data))
console.log("another two")
console.log("another three")
console.log("another four")

