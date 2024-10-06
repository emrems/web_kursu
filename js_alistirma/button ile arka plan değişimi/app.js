const button = document.querySelector("button");
button.addEventListener("click",run);
var isRed = false;

function run(){
    if(isRed){
        document.head.style.backgroundColor= "white";
    }
    else{
        document.body.style.backgroundColor="red";
    }
    isRed = !isRed;//true ise false false ise true yapar
   
}

