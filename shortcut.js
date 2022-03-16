const myVar = 500;


if(myVar>100){

          console.log("biriyani")
}else{

   
          console.log("blank")
}

const MyDrink =600;

if(MyDrink>6){


          console.log("ami dhaka jamu")
}else{

          console.log("jamiuna")
}




let Celebrate=(myVar>400 && MyDrink>500) ? "all is well" : "";
console.log(Celebrate)

// number to string

const number = 56;
const Numstr =number + ""
console.log(Numstr);

// String to number

const number1 ="56"

const StrNum=+number1
console.log(StrNum);

let isActive =false;

const ShowUser =()=>{console.log("ami dekhai")};
const HideUser =()=>{console.log("ami dekhaina")};

// isActive ? ShowUser() : HideUser();
// // console.log(isActive)

// isActive && ShowUser();
// isActive || HideUser();

isActive =!isActive;
console.log(isActive)