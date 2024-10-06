// spread operatörü diziyi indislerine ayırır ve parçalar

//? örnek
/*
const topla = (x,y,z,t)=>{
    console.log(x+y+z+t);
}

let dizi =[22,3,4,9];
//console.log(topla(dizi[0],dizi[1],dizi[2]));

topla(...dizi);//=console.log(topla(dizi[0],dizi[1],dizi[2])); aynı şey 
*/

//?örnek
/*
let isimler1 = ["ahmet","mehmet","kevser"];
let isimler2 = ["emre","elif","suna","kadir"];
//isimler2 dizisinin içine isimler1 dizisini koymak istiyorum
let isimler3 = ["emre","elif","suna","kadir",...isimler1];
console.log(isimler3);*/

//? örnek 
/*
let sayilar = [2,3,54,2,4,5,3,4];
let [a,b,...kalanSayilar]=sayilar;// a ve b ye 2,3 değerini atadıktan sonra geriye kalan sayıları kalanSayilar adlı diziye attı
console.log(kalanSayilar[2]);
*/

//?örnek

let dizi1 = [3,4,5,"emre",true];
let dizi2 = [];
//dizi1'i dizi2 ye atmak istiyorum
dizi2 = [...dizi1];
console.log(dizi2);