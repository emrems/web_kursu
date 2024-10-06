//ASYNC AWAIT promise then zincirlerinden kurtulmak için kullanılır bazen iç içe birden fazla then kullanılıyor bu durumnu önüne gecmek için

async function hello(){//başına async koyduk bu sayede bize promise doner
    return "hello";
}

//console.log(hello())//burası bize promise doner


/*
hello()
.then(res=>console.log(res))*/



//? postId'si 1olanı getir ve postId olanın yorumlarını getiricez iki kere istek atmamız lazım

//! KLASİK THEN İLE YAPIMI 
/*
const button = document.querySelector("#button").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")//fetch api ile postu 1 olanın postunu getirr
    .then(res=>res.json())
    .then(data=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)//post id si 1 olanın yorumunu getir
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err));
    })
});
*/



//! ASYNC AWAIT İLE YAPIMI
//EĞER BİR YERDE AWAİT KULLANIYORSAN KULLANILAN FONKSİYONUN BAŞINA ASYNC KOYMALISIN
//AWAIT PROMİSE DÖNEN YERLERDE KULLANILIR
//AWAİT BİR SONRAKİ SATIRA GEÇMESİNİ ENGELLİYOR İLK ONCE CEVABI ALIP ONDAN SONRA BİR SONRAKİ KODA GEÇMESİNE İZİN VERİYOR

document.querySelector("#button").addEventListener("click",async()=>{
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")//buraya istek atıcaz ama cevap geç dönebilir burdan cevabın gelmesi beklenmeli. response tipnde cevap doner
    const post = await responsePost.json();

    const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComment.json();
    console.log(comments);
})  

//?BİRAZ DAHA KISA HALİ

document.querySelector("#button").addEventListener("click",async()=>{
    const post = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()//ilk fetch isteğinde response donecek onunda .json alınca promise donecek burada iki kere asenkron problemi olduğu için iki kere await kulandık
    const comments = await (await (fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`))).json()
    
    console.log(comments);
}) 