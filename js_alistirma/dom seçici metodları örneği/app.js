//! getElementById , getElementByClassname ve diğer tüm seçicilerde parametreleri verirken doğru vermeliyiz yanlış verirsek bize hata vermez bos dizi döndürür

const body = document.getElementsByTagName("body");//tüm body seçebilirim
//console.log(body);

document.getElementById("benimid");//id ile yakalandı
var nesne = document.getElementsByClassName("benimclass");//class ile yakalandı ve dizi olarak bize gösterilir ancak foreach ile falan işlem yapılamaz yani tam olarak array değil
var liste = document.getElementsByTagName("li");//tag ile yakalandı
//console.log(liste);


var liste1 = document.getElementsByTagName("ul");
//console.log(liste1);






//!querySelector ve querySelectorAll css seçicilerdir
let nesne1 = document.querySelector(".benimClass");//aynı class ismi olmasına rağmen sadece ilk geleni seçer
//console.log(nesne1);    

let nesne2 = document.querySelectorAll(".benimClass");//benimClass olan hepsini seçer ve geriye dizi döndürür
//console.log(nesne2);

nesne2.forEach(function(eleman){
    eleman.style.color="red"; //her bir elemente stil uygular ve rengi kırmızı yapar

});

const ul = document.querySelectorAll("ul .benimClass");//bu şekilde de ul içinde benimClass'ları seçebilirim
//console.log(ul);
