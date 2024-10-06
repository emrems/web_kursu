let mesaj=
`
nigrosa hoşgeldiniz.
money kartınız varmı?
1-evet
2-hayır


`

const urunler = [
    {
        urunIsmi:"süt",
        fiyat:15
    },
    

    {
        urunIsmi:"elma",
        fiyat:30
    },



    {
        urunIsmi:"kuşbaşı",
        fiyat:400
    }
]


// burdan sonuc değişkenine true ya da false olarak geri dönecek
let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //money kartı vardır.Bir müşteri oluşturmak lazım
    let isim = prompt("isim gir");
    let soyisim = prompt("soyisim gir");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar=musteri.hesapla();
    alert(
        `müşteri bilgileri: ${musteri.isim} ${musteri.soyisim}
        odenecek tutar:${odenecekTutar}
        
        `);

}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `
        odenecek tutar : ${odenecekTutar};
        
        `
    )

}
