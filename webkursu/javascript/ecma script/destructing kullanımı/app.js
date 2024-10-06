/*
let names = ["emre","ahmet","mehmet"];
let name1,name2,name3;
[name1,name2,name3] = names;
console.log(name1,name2,name3);*/

//?örnek1 dizi ile
/*
const hesapla =(a,b)=>{
    const toplam =a+b;
    const çarpim = a*b;
    const fark = a-b;
    let dizi = [toplam,çarpim,fark];
    return dizi;
}

let [a,b,c]=hesapla(5,7);//a,b,c değişkenlerini oluştrup toplam carpım fark sonuçları atadık
console.log("toplam:"+a+"çarpım sonucu:"+b+"farkı:"+c);*/


///? örnek2 obje ile
//obje içindeki keyler ile değişkenler aynı olmalı
const person = {
    firstname : "emre",//key value şeklinde yazılır
    lastname:"almamıs",
    phone:"3434343434",
    adress:"orhan mahallesi"

}

let {firstname,lastname,phone,adress} = person;
console.log(firstname,lastname,phone,adress);

