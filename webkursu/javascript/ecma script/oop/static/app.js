class Matematik{

    static topla(a,b){
        console.log(a+b)
    }


    cikar(a,b){
        console.log(a-b)
    }
    

    carp(a,b){
        console.log(a*b)
    }



    bol(a,b){
        console.log(a/b)
    }
}
//static olarak tanımlamış methoda türetilmiş nesne üzerinden ulaşamazsın
const matematik = new Matematik();
//matematik.topla(4,3);



// class ismi ile ulaşabilirsin
Matematik.topla(5,2);//topla fonksyonu static oldugu için class ismi ile erişebilirsin

//! peki neden static kullanmaya ihtiyaç duyarız? çünkü her nesne oluşturduğunda hepsi için yer ayrılıyor ama bazı kodlar projede belli yerlerde kullanılıyor bu yüzden
