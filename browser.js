

const alertClick = () =>{


          alert("this is only alert");
}
const confirmClick = () =>{


       const rspose =   confirm("this is only confirm");
       if(rspose ){

          console.log('this is true')
       }else{

          console.log("this is false")
       }
}

const promotClick = () =>{


          prompt("What is your name")
}

const myPromot=(numbers)=>{
   numbers=numbers +200;

   prompt("Whts my promot")
   console.log(numbers)


}


myPromot(200)