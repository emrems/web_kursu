// callbacklere alternatiftir callback yerine kullanılır
//asenkron yapıları senkron yapılara çevirmek için kullanıyoruz

/*
PROMİSİN 3 MO DU VAR
1-pending = bekleme modu
2-fullfiiled = resolve  =işlem başarılı = .then ile yakalarım
3-rejected = işlem başarısız  =.catch ile yakalarım
*/ 


//promise içinde 3 tane tanımlı fonksiyon var catch,finally,then

/*
let check = true;
const myPromise = new Promise((resolve,reject)=>{//promise iki tane parametre alır
    if(check){
        resolve("promise başarılı");
    }else{
        reject("promise başarisiz");
    }

})

console.log(myPromise);
*/


/*
let check = true;
function createPromise(){
    return new Promise((resolve,reject)=>{
        if(check){
            resolve("sıkıntı yok");
        }else{
            reject("sıkıtnı var");
        }
    })
}
createPromise()//bu hali bize bir promise dondurur bir sonuc vermez
.then((response)=>{
    console.log(response);
})


.catch((error)=>{
    console.log(error);
})

.finally(()=>console.log("her zaman çalışır"))
*/


/*
//? PROMİSE VE XMLhttprequest KULLANIMI
//kendi .json dosyamdan verileri çektim
function getInformation(url){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.status===200 &&  xhr.readyState==4){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();

    })
}

getInformation("students.json")
.then(data=>console.log(data))
.catch(error=>console.log(error))
*/

function getUsers(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.status===200 && xhr.readyState===4){
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send();
    })
}

function getCommentbyUserId(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.status===200 && xhr.readyState===4){
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send();
    })

}

getUsers("https://jsonplaceholder.typicode.com/users/3")
.then(users=>{
    console.log(users);
    return getCommentbyUserId(`https://jsonplaceholder.typicode.com/comments/${users.id}`)//burada return kullanarak dışarı aktarıp bir sonraki thende kullandık


    // users.forEach(eleman=>{
    //     console.log(eleman.name);// aldığımız kullanıcıların ismini yazdırıdm
    // })
})
.then((res=>console.log(res)))
.catch(error=>console.log(error))


