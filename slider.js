const images=[

                    '/images/banner-images/headphone.png',
                    '/images/banner-images/tv.png',
                    '/images/banner-images/xbox.png',
                     


          
];
let  Imgindex =0;

const ImgElement =document.getElementById("img-slider")
setInterval(()=> {
          // console.log(Imgindex)
          if(Imgindex>=images.length){

                    Imgindex =0 ;
          }
          const ImgUrl = images[Imgindex];
          // console.log(ImgUrl)
          ImgElement.setAttribute("src",ImgUrl);
          Imgindex ++



},1000)