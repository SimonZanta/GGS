 //run function on window resize
 window.onresize = resize;

 function resize(){
     if(window.innerWidth > 425){
         document.getElementById("bottom-navbar").style.display = "block"
         try{
            document.getElementById("games-slider").style.display = "block"
         }catch{
         }
     }
     else{
         document.getElementById("bottom-navbar").style.display = "none"
         try{
            document.getElementById("games-slider").style.display = "none"
         }catch{
         }
     }
 }
 function menu(){
   displayState = document.getElementById("bottom-navbar").className;
   console.log(displayState)
   if(displayState == "visible"){
     document.getElementById("bottom-navbar").style.display = "none"
     document.getElementById("bottom-navbar").classList.remove("visible")
     document.getElementById("bottom-navbar").classList.add("hidden")
   }else{
     document.getElementById("bottom-navbar").style.display = "block"
     document.getElementById("bottom-navbar").classList.remove("hidden")
     document.getElementById("bottom-navbar").classList.add("visible")
   }
 }