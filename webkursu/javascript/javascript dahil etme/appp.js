//! document write ile çıktı verebilme

// document.write("hello world <br>");
// document.write("emre almamış");


//!console log metodu ile çıkktı verebilme

// console.log("hello world");
// console.log(34)
// console.clear();//consolu temizler

// let a=5;
// let b=6;

// console.log("iki sayının toplamı=",a+b)
// console.clear();

//alert (uyarı) popup ile çıktı vermme şekilleri
//console.log(document.location.host);


///alert uyarmak için kullanılan bir mesaj türüdür
//alert("dikkat edin")



// ! DEĞİŞKEN TANIMLAMA
/* 
global scope = her yerden erişililebilir

function scope = sadece kullanıldığı fonksiyonda kullanılabilir oradan erişilebilir fonksiyon dışında değişkene ulaşmak istersem hata alırım

block scope=if,while,for gibi yerlerde kullanılan değişkenlerdir genelde

*/


// eğer bir değişken tanımlamak istiyorsak var-let-const veri tiplerini kullanmmamız lazım
// var x=10;//global scope dur her yerden ulaşabiliriz
// console.log(x);

// function method1(){
//     var a=4;//function scope
//     if(true){
//         var b=3;//block scope

//     }
// }

//! VAR LET CONST FARKLARI
// var ile tanımladığımız her şey fonction scope oluyor mesela bir if içinde de kullansan function scope gibi davranır
// let/const block scope özeliğine saahiptir

// function selamver(){
//     var selam="merhaba";
//     if(true){
//         var b=5;
//         let c=4;
//         const f=0;

//     }
//     console.log(b);//b var ile tanımlandığı için fonksiyonun her yerinden ulaşılabilir
//     console.log(c);//c let ile tanımlandığı için buradan ulaşamam ve console ekranında hata verecektir
//     console.log(f);//let ile aynıdır buradan erişemem
// }

// selamver();


/*
var a=0;
var a=9;
console.log(a);
burda bize 9 çıktısını verecektir*/


/*
if(true){
    let e=3;
    let e=9;
    console.log()//buradan çıktı alamam çünkü let ile tanımlanmış bir değişkene iki sefer atama yapamazsın
}*/

//! VERİ TİPLERİ

/* 
1-string
2-number
3-boolean
4-null (boş)
5-undefined (tanımsızdur)
6-object (nesne)
7-array (dizi)

*/

/*
let isim="emre 23 yaşında";
console.log(isim);

let sayı=32;
console.log(sayı);
console.log(typeof sayı);//burada bize sayının tipini number olarak verecektir*/

//? UNDEFİNED VERİ TİPİ
/*
let x;
console.log(x);//undefined*/

//? OBJECT VERİ TİPİ
/*
let insan={
    ad:"Emre",
    yas:23,
}
console.log(insan);*/

//? ARRAY VERİ TİPİ
/*
let rakamlar=[1,23,43,3,4];
console.log(rakamlar[0]); //ilk elemanı getirdik*/


//! OPEATORLER
/*// string ile int sayısını toplarsan birleştirme yapar
let sayı="4";
let sayı2=3;
console.log(sayı+sayı2);*/

/*// ++ 1 arttırmak için kukkanılır -- 1 azaltmaak için kullanılır
let a=10;
a++;
a--;
console.log(a);*/

/*console.log(5==4);//bize bradan bir boolean değeri dondurmesi lazım(fale donecek)
console.log(3=="3");//burada bize true sonucu donecek cunku karsılastırma ooperaorlerinde sadece içindeki değere bakar veri tipine bakmaz
*/

/*

=== operatoru hem tip hem de içerik olark eşit olmasına bakar hem içi hemde veri tipi aynı olacak
console.log(3==="3") burası bize false sonucu döndürecektir çünkü değerler aynı ama veri tipleri farklı
*/
/* ! boolen ifadesinin zıttnı alır true ise false yapar false ise true yapar*/

//! DİYALOG KUTULARI
/*
ALERT
PROMPT
CONFİRM

üçü de windov objesi içinde tanımlanmış objeleridir

*/

//! KULLANICIDAN DEĞER ALMA
/*
let isim =prompt("ismminizi girinz"); //prompt aslında return gibi değeri geri döndürüyor
console.log(isim);

kullanıcdan alınan her değer string olarak değerlendirilir*/

/*
let sonuc=confirm("silmek istediğine eminmisin")
console.log(sonuc); //bize burada ssoruyu soracak eğer gelen mesajda tamam dersek true sonuç dönecek eğer iptal dersek false sonucu döndürecek zaten confirm boolen değer döndürüyor*/

//! KOŞUL YAPILARI
/*
let not=45;

if (not<50){
    console.log("kaldınız notunuz:",not)
}

else{
    console.log("tebrikler geçtiniz notunuz:",not)
}*/

/*
let yas=Number(prompt("yaşınızı giriniz"));
let para=Number(prompt("paranızı giriniz"));

if(yas>24){
    if (para>3444){
        alert("tebrikler")
    }
    else {
        alert("yasınız tutuyor fakat yeterli bütçeniz yok")
    }
}

else{
    alert("yeterli bütçeniz yok")
}*/

/*
let vize=Number(prompt("vize notunu giriniz"));
let final = Number(prompt("final notunu giriniz"));

ortalama= vize*0,3 + final*0,7;

if (ortalama<50)
{
    alert("tebrikler geçtiniz")

}*/

//adını ve tckn alacaksın adı boş geçilemez tckn 11 karakterden oluşacak
/*
let ad=prompt("adınızı giriniz");
let tckn=prompt("tc kimlik numaranızı giriniz");
function kontrol_et(ad,tckn){

    if (ad!=""){  //isim boş değilse
        if(tckn.length==11){
            console.log("tebrikler giriş yapabilirsiniz");
        }
        else{
            console.log("Tc kimlik numarası hatalı");
        }
    }
    else{
        console.log("Ad boş geçilemez");
    }
    
}

kontrol_et(ad,tckn);*/


/*  
let boy=Number(prompt("boyunuzu giriniz"));
let kilo=Number(prompt("kilonuzu giriniz"));
kitle_endex=kilo/(boy*boy);

if (kitle_endex<18.5){
    console.log("ideal kilodasınız"+kitle_endex);
 
  
}
else if (kitle_endex>=18.5 && kitle_endex<=24.9){
    console.log("normal kilodasınız"+kitle_endex);
}
else if(kitle_endex>24.9 && kitle_endex<29.9){
    console.log("fazla kilolusunuz"+kitle_endex);
}

else{
    console.log("cok kilolusun"+kitle_endex);
}*/

/*
let dizel=24.34;
let benzin =22.25;
lpg=11.1;

const yeni_satir="\r\n";
const yakit_metni="1-dizel"+yeni_satir+"2-benzin"+yeni_satir+"3-lpg"+yeni_satir+"yakıt türünü seçiniz";

let secim=Number(prompt(yakit_metni));
yakit_litresi=Number(prompt("lütfen litreyi giriniz"));
let bakiye=Number(prompt("bakiyenizi giriniz"));


if (secim==1){
    tutar=yakit_litresi*dizel;
    if(tutar>bakiye){
        alert("yetersiz bakiye"+(tutar-bakiye)+"tl eksiğiniz var");
    }
    else{
        alert("yakıt alabilirsiniz kalan bakiye:",bakiye-tutar);
    }
}
else if(secim==2){
    tutar=yakit_litresi*benzin;
    if(tutar>bakiye){
        alert("yetersiz bakiye"+(tutar-bakiye)+"tl eksiğiniz var");
    }
    else{
        alert("yakıt alabilirsiniz kalan bakiye:",(bakiye-tutar));
    }

}

else if(secim==3){
    tutar=yakit_litresi*lpg;
    if(tutar>bakiye){
        alert("yetersiz bakiye"+(tutar-bakiye)+"tl eksiğiniz var");
    }
    else{
        alert("yakıt alabilirsiniz kalan bakiye:",(bakiye-tutar));
    }


}
else {
    alert("hatali giriş")}
*/

/*
let secim=prompt("lutfen 1-5 arasında bir sayı giriniz");//gelen sayılar string tipinde olacak

switch(secim){ // bana buradan kullanıcı tarafından 1-5 arasında sayılar gelecek ve bu sayılar string tipinde
    case "1":
        console.log("1 seçtiniz");
    break;
    
    case "2":
        console.log("2 seçtiniz");
    break;

    case "3":
        console.log("girilen sayı 3");
    break;
    
    case "4":
        console.log("4 seçtiniz");
    break;


    case "5":
        console.log("5 seçtiniz");
    break;


    default :
    console.log("girilen sayı 1-5 arasında olmalıdır");
}   */



/*
let yeni_satır = "\r\n";
let metin = "1-pazartesi" + yeni_satır + "2-salı" + yeni_satır + "3-çarşamba" + yeni_satır + "4-perşembe" + yeni_satır + "5-cuma";
let gun_sec = Number(prompt("lütfen bir gün seçimi yapınız"));

if (gun_sec > 5) {
    alert("lütfen doğru bir gün seçimi yapınız");
}
else {
    switch (gun_sec) {
        case 1:
            console.log("pazartesi gününü seçtiniz");
            break;

        case 2:
            console.log("salı gününü seçtiniz");
            break;

        case 3:
            console.log("çarşamba gününü seçtiniz");
            break;

        case 4:
            console.log("perşembe gününü seçtiniz");
            break;

        case 5:
            console.log("cuma gününü seçtiniz");
            break;


    }

}*/





/*
let turkce_dogru, turkce_yanlis = 0;
let mat_doğru, mat_yanlis = 0;
let sos_dogru, sos_yanlis = 0;
let fen_dogru, fen_yanlis = 0;
let puan = 0;
let okul_puanı=0;

let secim = prompt("1-tyt puan hesaplama \r\n 2-sistmeden çıkış lütfen bir seçim yapınız");

if (secim < 1 || secim > 2) {
    alert("lütfen geçerli bir seçim yapınız");
}
else {
    switch (secim) {
        case "1":
            okul_puanı=Number(prompt("oklul puanının giriniz"));
            turkce_dogru = Number(prompt("turkce doğru sayısını giriniz"));
            turkce_yanlis = Number(prompt("türkçe yanlış sayısını girinz"));

            mat_doğru = Number(prompt("mar doğru sayısını giriniz"));
            mat_yanlis = Number(prompt("mat yanlış sayısını girinz"));


            sos_dogru = Number(prompt("sosyal doğru sayısını giriniz"));
            sos_yanlis = Number(prompt("soayal yanlış sayısını girinz"));

            fen_dogru = Number(prompt("fen doğru sayısını giriniz"));
            fen_yanlis = Number(prompt("fen yanlış sayısını girinz"));

            let tplam_dogru = turkce_dogru + mat_doğru + sos_dogru + fen_dogru;
            let tplam_yanlis = turkce_yanlis + mat_yanlis + sos_yanlis + fen_yanlis;
            let dogru=tplam_dogru-(tplam_yanlis/4);
            puan=(dogru*4)+100+okul_puanı;
            alert("tyt puanınız:"+puan);
            break;
        case "2":
            alert("uygulamadan çıkış yapılıyor");
            break;
        default:
            alert("lütfen geçerli bir seçim yapınız")

    }
}
*/
 
//? TÜR DÖNÜŞÜMLERİ
// string,number,boolean,undefined gibi türler vardır

/*
let a=4;
let b="2";
console.log(a+Number(b));*/

// string ifadeyi number ifadeye çevirmek için parseInt() fonksiyonu kullanılabilir


/*
let c=parseInt("43");
let d=3;
console.log(c+d);*/

// number veri tipinden string veri tipine String() fonksiyonunu kullanabiliriz

/*
let sonuc=String(true);

console.log(typeof(sonuc));
console.log(sonuc);*/

//!DÖNGÜLER
//? FOR DONGUSU
/*
for(let i=1; i<10; i++){
    console.log(i);
}*/


/*
for(let i=0; i<10; i++){
    if(i%2==0){
        console.log("emre")

    }
    else{
        console.log("emine")
    }
}*/

//? WHİLE DONGUSU
/*
let a=0;

while(a<9){
    console.log(a);
    a+=1;
}*/


/*
let c=0;

while(c<12){
    if(c%2==0){
        console.log(c+"çift sayııdr");
    }
    else{
        console.log(c+"tek sayıdır");
    }
    c++;
}*/

//!BREAK CONTINUE ANAHTARI
/*
let v=0;
while(v<10){
    console.log(v);

    if(v==8){
        break; // döngüyü keser
    }
   
    v++;//burada v yi arttırmamızın nedeni 8 gelene kadar dongu devam etsin
}
*/

//!CONTINUE ANAHTARI
/*
let sayac=0;

while(sayac<11){
    sayac++;
    if(sayac>=10){
        break;
    }
    if(sayac==8){
        continue;//CONTUNIE DEYİMİNDEN SONRAKİ KODLAR WHİLE DONGUSUNUN SON KISMINA KADAR ÇALIŞTRILMAZ
        
    }
    console.log(sayac);
}*/



/*
//? ÇARPIM TABLOSU YAPIMI  
let a=1;
let b=1;
for(a=1; a<11; a++){
    for(b=1; b<11; b++){
        console.log(a+"x"+b+"="+a*b);

    }
    console.log("-----------")
}*/


//? ASAL SAYI BULMA
/*
let sayi=Number(prompt("lutfen bir sayı giriniz"));
let sonuc=true;
for(let i=2; i<sayi; i++){
    if(sayi%i==0){
        alert(sayi+" sayısı asal değildir");
        sonuc=false;
        break;
    }
   
}
if(sonuc){//eğer yukarıda sonuç true olarak kalmışsa demekki hiçbir çarpanına bolunmuyor
    alert("sayı asaldır");
}
*/

//? FAKTORİYEL BULMA 
/*
let sayi=Number(prompt("lütfen bir sayı giriniz"));
let toplam=1;
for(let i=1; i<=sayi; i++){
    toplam *= i;
}
alert(toplam);
*/


//? ARMSTRONG SAYI BULMA
//eğer bir sayının her basamağındaki rakamlarının  küplerinin toplamı kendisine eşitse armstrong sayı denir
/*
let sayi=prompt("lütfen bir sayı giriniz");
let sonuc=0;
for(let i=0; i<sayi.length; i++){
    let rakam=sayi.charAt(i);
    sonuc+=rakam*rakam*rakam;
}
if(Number(sonuc)==sayi){
    alert(sayi+" sayısı armstrong sayıdır.");
}
else{
    alert(sayi+" sayısı armstrong sayı değildir.")
}*/

//!  FONKSİYONLAR
/*
function Yazdır(isim,soyisim){
    let y=console.log("merhabalar",isim,soyisim);
    return y;

}

function Yazdırr(isim,soyisim){
    console.log("merhabalar",isim,soyisim);
    

}
 
Yazdır("emre","almamıs");
Yazdırr("emine","çelik");*/



/*
function küp(sayı){
    let kup=sayı^3;
    return kup;
}

let sayi=Number(prompt("bir sayi girinz"));
sonuc=küp(sayi);
if(sonuc>30){
    console.log( sayi+" sayının küpü 30 dan büyük")
}
else{
    console.log(sayi+"sayısının küpü 30 dan küçük");
}*/

/*KELİME BULMA UYGULAMASI*/
/*
let metin="şu an yalovada javascript eğitim videosu çekmekteyim";
let x=prompt("lütfen bir harf gir");
let sonuc=bul(x);
alert("aradığınız harf metinde "+sonuc+"defa geçmektedir");

function bul(harf){
    let sayac=0;
    for (let i = 0; i < metin.length; i++) {
        if(metin.charAt(i)==harf){
            sayac+=1;
        }
     
    }
    return sayac; 
}*/



/*
let sayi=int(prompt("bir sayi giriniz"));
toplam=0;
for(let i=1; i<sayi;i++){
    if(sayi%i==0){
        toplam+=i;

    }
}

if(sayi%toplam==0){
    alert("girilen sayı mükemmel sayıdır");
}*/







//! DİZİLER

//let dizi_isim=[1,"emre","ali",true,5.43];//diziler number string float boolean deger alabilir

//let sayilar=[2,3,4,32,21,4];
//console.log(sayilar[0]); //ilk elemanı çağırma

//console.log(sayilar.length);//dizinin uzunlugunu veriyor

//sayilar[3]="mahmut";//3. indise mahmut verir 

//console.log(sayilar); //tüm diziyi gösterir

//console.log(sayilar[7]);//dizinin uzunlugunu aştığımız için bize undefined dondurecek

//let isimler=["emre","ali","mehmet","hakkı","niyazi"];
//console.log(isimler);


//? NESNE YONTEMİYLE DİZİ OLUSTURMA
//let dizi= new Array("emre", "ahmet" ,"mehmet");console.log(dizi);

//? FOREACH DONGUSU
// let isimler=["emre", "ahmet","mehmet","emin","emine"]
// isimler.forEach(function(eleman){
//     console.log(eleman);

// });

// let sayac=0;
// while(sayac<isimler.length){
    
//     console.log(isimler[sayac])
//     sayac+=1
// }

//! DİZİ METODLARI
//? push=dizinin sonuna eleman ekler dizinin uzunlugunu doner
//let dizi=["emre","ali","ahmet"];
// let eski_uzunluk=dizi.length//dizinin uzunlugunu aldık

// console.log(eski_uzunluk);

// let uzunluk= dizi.push(43);//yeni uzunlugu aldık

// console.log(dizi);


//? unshift metodu dizinin başına eleman ekler
// let dizi=["emre","ali","ahmet"];
// dizi.unshift("kadir","neriman");
// console.log(dizi);

//?pop diziden son elemanı siler parametre istemez

// let dizi= ["emre","ali","ahmet"];
// dizi.pop();
// console.log(dizi);

//? splice metodu
/*
let dizi= ["emre","ali","ahmet"];
dizi.splice(1,0,"hamit","ali","32",32,true)
//1. indisten başla bir şey silme verileri araya ekle
//dizi.splice(1,1,"hamit","ali","32",32,true)
//1. indisten başla eklendiği indisteki elemanı sil verileri araya ekle
//console.log(dizi);

let arabalar=["ford","bmw","renault","cherry","kia","ceko","fiat"];
// bmw ve renault silmek istiyorum
arabalar.splice(1,2);

arabalar.splice(2,2,"hyundai")
console.log(arabalar);*/

//? tostring metodu
// string veri yapısına çevirir

/*let sayilar=[2,4,32,43,54];

console.log(typeof sayilar);

let yeni=sayilar.toString();

console.log(typeof yeni);
*/

//?reverse metodu
/*let isimler=["emre","reis","ahmet","mehmet"];
k=isimler.reverse();
console.log(k);*/

//?splite metodu
//verilen stringi splite verdiğimiz parametreye göre ayırıp dizi haline getirir
/*let dersler="matematik,turkce,fen,ingilizce"
let ayri=dersler.split(",");
console.log(ayri);
*/

//? indexof metodu
//istedigimiz verinin dizide olup olmadıgını sorguluyoruz eğer içinde varsa 0 donduruyor yoksa -1 donduruyor
/*let isimler=["emre","reis","ahmet","mehmet"];
let index=isimler.indexOf("emre");
console.log(index);*/
