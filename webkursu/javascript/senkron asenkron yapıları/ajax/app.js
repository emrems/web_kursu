//AJAX sunucuya istek atıp veri almak için kullanırız.Tarayıcı ve server arasındaki bağlantıyı sağlıyor
//pek kullanılmaz ama yine de bilmek gerek bunun yerine fetch api kullaılır
//AJAXIN XMLHttpRequest objesini kullanarak verileri alırız
const xhr = new XMLHttpRequest();//XMLHttpRequest nesnesinin birçok özelliği vardır
console.log(xhr);

function prepareUrl(url,id){
    if(id===null){
        return url;
    }
    return ` ${url}?postId=${id}`;

}
function getComment(url,id){
    let newUrl=prepareUrl(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4 && xhr.status===200){//eğer buraya giriyorsa başarılı bir şekilde veriyi aldım demektir
            console.log(JSON.parse(xhr.responseText));//verileri alabilmek için XMLHttpRequest metodunun  responseText özelliği kullanılır burda veriler string olarak gelir JSON.parse ile json formatına döndürdüm
        }
    })

    xhr.open("GET",newUrl)//istekte bulunuyoruz ve url adresini verioruz
    xhr.send();//isteği gönderiyor

}

getComment("https://jsonplaceholder.typicode.com/comments",null);//null yerine 1 veya 2 falan yazabilirim o zaman id'si 1 olanın postunu getir demiş olurum


function getUsers(url){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open( "GET" ,  url );
    xhr.send();
}

getUsers("https://jsonplaceholder.typicode.com/users");