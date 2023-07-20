function showMenu(){
    var menu = document.querySelector(".header2");
    if(menu){
        menu.style.display="block";
    }
}

document.getElementsByClassName("menu-responsive").addEventListener("click", showMenu)
