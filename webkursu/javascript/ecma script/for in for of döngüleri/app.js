// for in döngüsü bana dizinin indisini verir

let isimler = ["emre","ahmet","ali"];
for(let name in isimler){
    console.log(name);
}

// for of döngüsü ise dizinin elemanlarını verir

let dizi = ["emre","ahmet","ali"];
for(let eleman of dizi){
    console.log(eleman, dizi.indexOf(eleman));// dizi.indexOf(eleman) bu şekilde de indisleri yakalyablirim
}