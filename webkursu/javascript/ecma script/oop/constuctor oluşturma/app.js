class Insan{
    /*
    1-özellikler
    2-yapıcı method
    3-function
    class içeriğini bu üç unsur oluşturur
    */ 
    constructor(isim,soyisim,yas,maas){//yapıcı metod
        this.ad =isim//ad benim değişkenim isim ise constructura verdiğim parametre 
        this.soyad = soyisim
        this.yasi = yas
        this.maaşı= maas
    }

    bilgileriGoster(){
        console.log(`isim:${this.ad} soyisim:${this.soyad} yaş:${this.yasi} maas:${this.maaşı}`);
    }
}

const insan1 = new Insan("emre","almamış",32,5000);
insan1.bilgileriGoster();
console.log(insan1.soyad);