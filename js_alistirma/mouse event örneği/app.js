const baslik = document.querySelector("h1");
const input = document.querySelector("#emre");

baslik.addEventListener("mouseover",run);
baslik.addEventListener("mouseout",stop);
input.addEventListener("click",git)
let sayac=0;


function run(e){
    console.log(e.target);
    baslik.style.color = "red"; 
}





function stop(){
    baslik.style.color = "blue";
}




//gonder butonuna tıklanma sayısını göster
function git(){
    
    sayac+=1;
  
    console.log(sayac+"defa tıklandı");
   
    
}
