//KLAVYE EVENLERİ

//keypress:harf ve sayılarda tetiklenir
//keydown:klavyedekş her şeyi algılar keypress ile tek farkı budur
//keyup:klavyede elini tuştan çektikten sonra çalışır her şeyi algılar

/*
document.addEventListener("keypress",run);// web sietesine girdiğinde klaveyden bastığın tuşları yakalar sadece sayı ve harfleri yakalr
function run(e){
    console.log(e.key)//bastığın tuşları consolda gösterir
}*/


/*
document.addEventListener("keydown",git);

function git(e){
    console.log(e.key);
}
*/


/*
document.addEventListener("keyup",islem);
function islem(e){
    console.log(e.key);
}
*/

/*
const card_title = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");
input.addEventListener('keyup',run);
function run(e){
    card_title.textContent = e.target.value;// inputtan ne girilirse card_title'nin tuttuğu yerde de o gözukecek e.target.value ise o anda hangi eventin verisi varsa
}
*/


