// eskiden xmlhttprequest ile istek atıyoduk artık fetch api ile istek atacağız
//servere istek atmak için kullanılır fetch api
//fetch api ile istek attığımızda bize response döner .json  yaparsak bize prommise doner yani fetch api ile istek attıgımzda iki kere then kullanmalıyz
//asenkron çalışıyor bizde promise ile senkrona ceviriyoruz

function getStudents(url){
    fetch(url)//adrese istek attık ve bize response tipinde promise döndürdü.
    .then((response=>{//dönen response tipindeki promise'i yakaladık 
        return response.json();//response içindeki veriye ulaştık ve bize yine promise dondu
    }))
    .then(data=>console.log(data))//donen promise içindeki dataları yakaladık
    .catch(error=>console.log(error))
}
 
getStudents("students.json")//students.json bizim oluşturduğumuz dosya


function getData(url){
    fetch(url)
    .then(response=>response.json())//response.json tek satır oldugu için sanki return varmış gibi davranıyor
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")