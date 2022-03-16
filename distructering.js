const[x,y] =[50,12];

console.log(x,y);

 const numbers =[30,10];
 const [a,b]=numbers;
 console.log(a,b);

 const boxify=(num1,num2)=>{
           const nums =[num1,num2];
           return nums;



 }

//  console.log(boxify(20,60))

 const[first,second] = boxify(60,90)
 console.log(first,second);

 const students= {

          name:"rohim",
          age:20,
          hobby:"playing",
          movies:[
                    "king khan",
                    "english man"
          ]
 }



const [name1,name2] =students.movies;
console.log(name1,name2)


const {name,age} = {name:"alu",age:6}
const {nam1,age1} = {name:"alu",age:6,life:"nai"}


const Employeman=

{

          name:"sabbin",
          designation:"developer",
          age:25,
          blood:"ab+",
          watch:{
                    color:"blue",
                    wait:"20gm"


          }




}

const {blood,designation} ={Employeman}

