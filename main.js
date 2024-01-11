let next = document.getElementById("next")
let prev =document.getElementById("prev")
let img_tag=document.querySelectorAll(".slider")
console.log(next)
const myImages=[
    "img/megi.png.png",
    "img/1.png",
    "img/2.png",
    "img/3.png",



]
let conter = 0
next.addEventListener("click", function(){
   
    console.log("clickl eventi isledi")
   if (conter>myImages.length-1) {
    conter=0
   }
   img_tag[0].src=myImages[conter]
conter++;
})
prev.addEventListener("click", function(){
debugger;
if (conter==0) {
    img_tag[0].src=myImages[conter]
    conter=myImages.length-1;
}
else{
    img_tag[0].src=myImages[conter]
    conter--;
}


})




img_tag.forEach(element => {
    element.addEventListener("click",function(){
    var baseSrc=img_tag[0].src
   var chieldSrc= element.src
   for (let i = 1; i < img_tag.length; i++) {
    debugger;
 if ( baseSrc==img_tag[i].src)
 {
    img_tag[0].src=chieldSrc;

 }
 else if(i==img_tag.length-1){

     img_tag.src=chieldSrc
     img_tag[0].src=chieldSrc
     element.src=baseSrc  
 }
   }
  
    })
});

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let input = document.getElementById('van')

plus.addEventListener('click', function () {
  input.value++
})
minus.addEventListener('click', function () {
  if (input.value > 0) {
    input.value--
  } else {
    input.value = 0
  }
})

console.log(input.value)