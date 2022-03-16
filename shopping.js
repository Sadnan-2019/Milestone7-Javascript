const loadProduct = () =>{

          const cartload = getCart();
          for(names in cartload){
                    DisplayProduct(names)
          }




}

const AddItem = () =>{


          const productName =document.getElementById("product-name");
          const name =productName.value;
          // console.log(name)

          if(!name){

                    return ;
          }
          productName.value =""

          DisplayProduct(name)

          AddProductToCart(name)
}
const DisplayProduct=(name)=>{


          const products = document.getElementById("products")
          const li =document.createElement("li")
          li.innerText=name;
          products.appendChild(li);
          
}

const getCart = ()=>{


          const cart =localStorage.getItem("cart");
          let cartobj;
          if(cart){

                    cartobj =JSON.parse(cart);
          }else{

                    cartobj= {};
          }

          return cartobj;
}

const AddProductToCart = (name) =>{

          const cart =getCart();
          if(cart[name]){

                    cart[name] =cart[name] +1
          }
          else{
                    cart[name] =1;
                    }
          // cart[name]=1;
          // console.log(cart)
          const cartStingiFied = JSON.stringify(cart);
          localStorage.setItem("cart",cartStingiFied)

}

const placeOrder=()=>{

 document.getElementById("products").textContent="";
 localStorage.removeItem('cart')

}
loadProduct()