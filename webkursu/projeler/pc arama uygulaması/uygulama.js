
//dizide urunlerimiz var dışarıdan bir seçim yapacak ve seçim yaptıgı pc dizi içindeyse bize geri dondurecek


let urun1={
    isim :"acer",
    kategori:"teknoloji1",
    renk: "siyah",
    fiyat:4322

};

let urun2={
    isim :"lenovo",
    kategori:"teknoloji2",
    renk: "beyaz",
    fiyat:43322

};

let urun3={
    isim :"casper",
    kategori:"teknoloji3",
    renk: "mavi",
    fiyat:6454

};

let urun4={
    isim :"msi",
    kategori:"teknoloji4",
    renk: "mor",
    fiyat:654442

};

let urun5={
    isim :"lenovo",
    kategori:"teknoloji6",
    renk: "gri",
    fiyat:443554

};


let urunler=[urun1,urun2,urun3,urun4];
let filtreli_urun=[];

let secilen_urun=prompt("ürün ismi giriniz");


function secilen_urun_doldur(urunler_dizisi){
    urunler_dizisi.forEach(function(urun){
        // urunler içinde gezecek butun harfleri buyuk yapacak eğer o anki ürün seçilen ürüne eşitse filtreli_urun dizisine ekleyecek
         if(urun.isim.toUpperCase().includes(secilen_urun.toUpperCase(),0)){
            filtreli_urun.push(urun);
         }
         else{
            console.log("ürün bulunamadı");
         }
    
    })
    
    
}

function filtreli_urunleri_yazdır(urunler){
    urunler.forEach(function(eleman){
        console.log("-------------------------")
        console.log("|" + eleman.isim + "|" + eleman.renk + "|" + eleman.fiyat);
        console.log("--------------------------\n");
    })
}

secilen_urun_doldur(urunler);
filtreli_urunleri_yazdır(filtreli_urun);