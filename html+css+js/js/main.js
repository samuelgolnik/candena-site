var changeBtn = document.getElementById("change-mode");
changeBtn.addEventListener("change", function(){
    var itemsChange = document.querySelectorAll(".light");
    for(var i = 0; i < itemsChange.length; i++){
        itemsChange[i].classList.toggle("dark");
    }
    var itemcColors = document.querySelectorAll("light-mode");
    for(var i = 0; i < itemcColors.length; i++){
        itemcColors[i].classList.toggle("dark-mode");
    }
})