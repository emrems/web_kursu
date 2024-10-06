/*


1-javascript senkron çalışan bir dildir.yani bir iş bitecek ondan sonra diğer iş başlayacak.Kodları yukarıdan aşağıya sırayla çalıştırır
-------------ASENKRON ÇALIŞMASINA SEBEP OLANLAR------------
2-bazı durumlarda ise asenkron çalışır
a-Timeing
b-event(olaylar)
c-Http isteklerinde asenkrOn çalışır
işin içinde bunlar varsa asenkron çalışır

------ CALLBACK- PROMİSE- ASYNC & AWAİT metodları ile ---------------
-----Asenkron yapıları senkrona çevirip yönetebiliyoruz
*/ 
console.log("emre");

setTimeout(()=>{
    console.log("1 sn geçti ve çalıştı");
},1000)//1 sn sonra çalışacak

setTimeout(()=>{
    console.log("0.5 sn geçti ve çalıştı");
},500)//0.5sn sonra çalışacak

console.log("almamış");

//!consolda yazdıklarmız senkrondur bu yüzden hemen konsola yazıldı ama setTimeout fonksiyonu asenkron çalıştığı için belli süre sonra geldi halbuki console daha sonra yazılmıştı
//!yani kodun yazılma sırası değil bekleme süresine göre konsola yazıldı