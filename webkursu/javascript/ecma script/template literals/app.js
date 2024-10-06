// stringlerin birleştrilmesi için kullanılır
/*
function write(isim,soyisim){
    console.log("merhaba"+" " + isim,soyisim);
}
write("emre","almamış");
*/

function write(isim,soyisim){
    console.log(`merhaba ${isim} ${soyisim}`);//bu şekilde stringleri birleştirebilirm
}
write("emre","almamış");



//! peki bu template  literals nerede kullanacağım? 
//? örnek

function yaz(userId){
    console.log(`http://loclhost:8080/users/${userId}`);
}

yaz('123');// http://loclhost:8080/users/ bu kısım sabit ancak userId sürekli değişecektir fonksiyona gonderdiğin parametreye göre güncellenecktir