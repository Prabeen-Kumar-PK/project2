const nav= document.querySelector("#navList")
const menu = document.querySelector("#navmenu")

function togglemenu(){

  if(nav.classList.contains("toggle")){
    nav.classList.remove('toggle')
   
  }
  else{
    nav.classList.add('toggle');
   
  }
}

menu.addEventListener("click",function(){
    togglemenu();
})

