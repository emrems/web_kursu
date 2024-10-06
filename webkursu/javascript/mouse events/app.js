//! EVENT
//? addEventListener() metodu kullanılır 

const clearButton = document.querySelector("#todoClearButton");
clearButton.addEventListener("click", changeTitle);

function changeTitle(){
    document.querySelectorAll(".card-title")[1].textContent='başarılı bir şekilde değiştrildi';
};



const todo_listesi_sec = document.querySelectorAll(".card-title")[1];
//console.log(todo_listesi_sec);


//! MOUSE EVENTLERİ

//? DOMContentLoaded event(sayfa yüklendiğinde çalışacak demek document objesi üzerinden erişim sağğlanır)

/*
document.addEventListener( "DOMContentLoaded", run);

function run(){
    alert("merhaba emre")
}*/


// ?load  event kullanımı (window objesi üzerinde erişim sağlanır) 

/*
window.addEventListener('load',git)

function git(){
    alert( "merhabe")
}*/



//? click event

/*
const todolistesi = document.querySelectorAll( ".card-title" )[1];
// toto listesine tıklayınca  basariliClick fonksiyonu çalisacak
todolistesi.addEventListener('click',basariliClick);
function basariliClick(){
    console.log("click basarili bir şekilde yapıldı");
}*/


//? mouseover event
/*
const card_body_2 = document.querySelectorAll(".card-body")[1];
const card_body_cocuk_1 = card_body_2.children[0];
card_body_cocuk_1.addEventListener('mouseover',run)//mouse ile üzerine gelince
function run(e){
    console.log(e.type);

}*/



//? moueseout events
/*
const card_body_2 = document.querySelectorAll(".card-body")[1];
const card_body_cocuk_1 = card_body_2.children[0];
card_body_cocuk_1.addEventListener('mouseout',run)//mouse ile üzerinden çekince
function run(e){
    console.log(e.type)};*/ 



//? mouseenter events
/*
const card_body_2 = document.querySelectorAll(".card-body")[1];
const card_body_cocuk_1 = card_body_2.children[0];
card_body_cocuk_1.addEventListener('mouseenter',run)//
function run(e){
    console.log(e.type)};*/

//?  mouseleave events
/*
const card_body_2 = document.querySelectorAll(".card-body")[1];
const card_body_cocuk_1 = card_body_2.children[0];

card_body_cocuk_1.addEventListener('mouseenter',run)
card_body_cocuk_1.addEventListener('mouseleave',run)//
function run(e){
    console.log(e.type)};*/

