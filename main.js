function menu(){
   let menu = document.getElementById("menu");
   menu.classList.toggle("active");
   cross();
}

function cross(){
   let cross=document.getElementById("cross");
   console.log("show cross after clicking");
   cross.classList.toggle("active");
}