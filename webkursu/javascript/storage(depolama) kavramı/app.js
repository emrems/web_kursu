// storage ikiye ayrılır local ve sessions.İkisi arasındaki tek fark pc veya tarayıcı kapanınca sessionsadakiler silinir localdekiler kalır
//tarayıcının kullandığı depolama alanıdır ve burda key value şeklinde veriler saklanır
// verilen key value çifti string olarak veriliyor.Local ve sessions storege window objeleri içinde yer alır
//?Session storage
//değer ekleme
sessionStorage.setItem("49","emre");//setItem fonksiyonu ile ekleme yapıyoruz

// değer silme
sessionStorage.removeItem( "49" );//silme için removeItem()fonksiyonunu kullanıyoruz,

sessionStorage.setItem("34","ali");

// değeralma
/*
let value = sessionStorage.getItem("34") ;//veriye ulaşmak için getItem()fonksiyonunu kullanıyoruz getItem bizden key ister sonuç olarak value döndürür
if(value==null){
    console.log("veri bulunamadı");
}else{
    console.log("veri:",value);
}
*/


// bütün verileri silme
//sessionStorage.clear()

let dizi = ["emre","ahmet","mehmet"];
sessionStorage.setItem("dizi",JSON.stringify(dizi));//elemanları dizi formatında ekler
let value = JSON.parse(sessionStorage.getItem("dizi"));//elemanları dizi formatında alır bu sayede uzerinde gezinme yapılabilir
console.log(value)



//! LOCAL STORAGE

let arabalar = ["ford","audi","bmw","renault"];
localStorage.setItem("arabalar",JSON.stringify(arabalar));//localstorage elemanlarını key'i arabalar value'si JSON.stringify(arabalar) dizisi olacak şekilde gönderildi
let x = JSON.parse(localStorage.getItem("arabalar"));//JSON.parse fonksiyonu ile dizi halinde geri alındı ve forEach ile tek tek consola yazdırıldı
x.forEach(function(eleman){
    console.log(eleman);
})

