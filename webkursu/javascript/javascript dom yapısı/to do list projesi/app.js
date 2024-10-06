//DOCUMENT OBJESİ

//console.log(window);

//let value;
//console.log(document);

//value=document.URL;//index.html sayfasının tam url inii verir
//console.log(document);
//value=document.title;
//value=document.links.item(4).classList;//css de kac tane class kullanılmıs onun listesini veriyor ve classlar sırayla indislenmiş şekilde geliyor
//value=document.links.item(4).classList[3];//css de kullanılan 3. classın hangisi oldugunu gosteriyor
//value=document.forms;//kulllanılan formları verir

// for(let i=0; i<value.length; i++){

//     var form=value[i];
//     console.log("form adı:"+form.name)
//     console.log("form idesi:"+form.id)
// }

//value=document.forms.item(1).name;//kullanılan 1. formun ismini veriyor

//console.log(value);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! SELECTORS BİZ BİR CSS YAKALAMAK İÇİN classname,id,tag name kullanılır yani biz js uzantılı bir dosyadan css ozelliklerine ulaşmak istersek 3 yolumuz var ANA BAŞLIK
//getElementById:id ile yaklamak istersen
//getElementByClassName: classa gore yakalar
//getElementsByTagName:tag name ile yaklamak istese bilersiniz
let value;
value=document.getElementById("todoAddButton");//document objesi içinden Id'si todoAddButton olan elementi getir

//value=value.id//valuenin içeriğinin id'sini al ve valueye at

//console.log(value.getAttribute("id"))//value içeriğinin id attributeni sahip id eyi getir

//console.log(value.className);

//console.log(value.getAttribute("class"))

const x=value.classList;//ID'si todoAddButton  olan elementin classlarını dizi haline getir 
//console.log(x[1]);//dizinin 2. elemanını al
//console.log(x)//tüm diziyi göster
/*
x.forEach(function(eleman){
    if(eleman=="btn"){
        console.log("adamsın")
    }
    else{
        console.log("elemanı bulamadın");
    }
})
*/

let y=document.getElementById("todoSearch");
//console.log(y);

//console.log(y.getAttribute("placeholder"));


//getElementsByTagName ile yapma

/*
const forms=Array.from(document.getElementsByTagName("form"))
forms.forEach(function(eleman){
    console.log(eleman)
})*/

//console.log(forms[0])//yakalamış olduğum formun 0. indexisindeki elemanı getir
//console.log(forms[0].id)//form listesinde 0. indisteki formun id'sini aldım

/*
const li_tagları=Array.from(document.getElementsByTagName("li"));
 
console.log(li_tagları)*/


//
//
//

//?getElementsByTagName, getElementByClassName,getElementById bu üçünün yaptığı  işlemi yapan bir selector var querySelectorAll

/*
id'leri seçerken # kullanıyoruz
const clearButton=document.querySelector("#todoClearButton");
console.log(clearButton);*/

/*
// classları seçerken . kullanıyoruz
const todolist=document.querySelector(".list-group");
console.log(todolist);*/

/*
const todolist=document.querySelectorAll(".list-group-item")[2];//normalde 4 tane list-group-item var ama sadece ilkini getirdi tamamını almak için querySelectorAll kullanmak lazim
console.log(todolist);*/


/*
const todolist=document.querySelectorAll("li");//projedeki li etiketlerini getir
console.log(todolist);*/


/*
const todolist=document.querySelectorAll("li:nth-child(1)");
console.log(todolist);*/



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! STYLE ÖZELLİKLERİNİ ANLAMAK ANA BAŞLIK
/*
// todo1'i class ile tut ve style özelliğini değiştir

const todo1 = document.getElementsByClassName("list-group-item")[0];//eger [0] yapmazsam hepsini getirir
todo1.style.color="red";
todo1.style.backgroundColor="purple";
todo1.style.fontWeight="bold";
todo1.style.paddingTop="70px";

//li etiketlerinin hepsini içeren ul classını seç ve stye ozelliklerini değiştir
const ul=document.querySelector(".list-group");
console.log(ul);
ul.style.marginTop="100px";*/






//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

//!     HTML ELEMENTLERİ ÜZERİNDE GEZİNME ANA BAŞLIK
const todo1=document.querySelector(".list-group-item");
const todolist=document.querySelector(".list-group");
const card=document.querySelector(".card");

//? ebeveyenden çocuklara erişmek(alt başlık)

//let deger=todolist.children;//todolistin sahip oldugu cocukları array olarak döner eğer istersem ögelerine erişebilirm
//let deger=todolist.children[2];//todolistin 3. cocuguna eriştim
//let deger=todolist.children[todolist.children.length-1].style.color="red";//son elemanını aldım ve rengini kırmızı yaptım
//let deger=todolist.children[1].textContent="adamsın";








//ÇOCUKTAN ANNEYE ERİŞİM
// todo1 in annesi ul ve biz ul'ye ulaşmaya çalışacağız

let parent_todo1=todo1.parentElement;//annesi ul'yi yakaladık
//console.log(parent_todo1);


let parent_ul=parent_todo1.parentElement;
//console.log(parent_ul); //ul nin annesi olan card'ı elde ettik



let parent_card=parent_todo1.parentElement;//burda da aynı şekilde ul'nin annesi olan cardı elde ettik
//console.log(parent_card);

let parent_card_card= parent_card.parentElement;//burada ise cardın parentını elde ettik
//console.log(parent_card_card);






//KARDEŞLER ARASINDA GEZİNME

let kardes_todo1=todo1.nextElementSibling;
//console.log(kardes_todo1);



//! ÖRNEKLER
//todo listesi yazan yere "yeni todo listesi" yaz

const todolistesi_değitir=document.getElementsByClassName("card-title")[1].textContent="yeni todo listesi";
//console.log(todolistesi_değitir);



// classı row olan elementi üzerinden todo listesi yazısını "yeni todo listesi" olarak değiştirdik
const row=document.querySelector(".row");

let degisken = row.children[0];

let child_degisken = degisken.children[3];

let child = child_degisken.children[0].textContent="yeni todo listesi";

//console.log(child);



///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//! DİNAMİK OLARAK ELEMENT OLUŞTURMA (ANA BAŞLIK)

//biz bir tane link vericez buton halinde ve oonu html içine ekleyeceğiz

let link = document.createElement("a");//link oluşturacağımı bildirdim
link.id="çelik motors";
link.className="btn btn-sm btn-dark mt-3";
link.href="https://celikmotorsotocenter.sahibinden.com/";
link.target="_blank";
link.innerHTML="çelik motors web sitesi";
link.style.backgroundColor="blue";

// yaptıgım bu linki Tüm Todoları Temizle butonunun altına eklemek istiyorum ilk önce butonun olduğu cardı seçip yeni bir kardeş eklemek isteyeceğim
let buton=document.querySelectorAll(".card-body")[1];//card-body'den iki tane olduğu iiçin querySelectorAll kullandık
buton.appendChild(link);//var olan çocuklar arasına bu çocuğu da ekle




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//! DİNAMİK OLARAK ELEMENT SİLME (ANA BAŞLIK)
// SİLMEK İÇİN REMOVE() METODU KULLANILIR

//todo1'i silme alıştırması
const todo_listesi = document.querySelectorAll(".list-group-item");
//todo_listesi[0].remove();
//console.log(todo_listesi);


const todo1_al = document.querySelector(".list-group-item");
//todo1_al.remove();


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!ELEMENTLERİN YERLERİNİ DEĞİŞTİRME

const card_body = document.querySelectorAll(".card-body ")[1];
console.log(card_body.childNodes[1]);//node listesi olarak bana verir
