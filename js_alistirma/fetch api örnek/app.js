//fetch window objesinin bir elemanıdır. Fetch içine bir api,txt,json verisi verirsek bize promise döner. Biz de promislerden yakalayabiliriz  verileri çekebiliriz

const test = document.querySelector("#buttonText")
const json = document.querySelector("#buttonJson")
document.querySelector("#buttonFetchApi").addEventListener("click",getRestApi)

const output = document.querySelector("#output")
test.addEventListener('click',getTextFile)
json.addEventListener('click',getJsonFile)


function getTextFile(){
    fetch("örnek.txt")
    .then(function(data){return data.text()})//burası bize promise döner.aşağıda bir daha yaklamak lazım
    .then(data=>output.textContent += data)
    .catch(err=>console.log("hata oluştu",err))
}




function getJsonFile(){
    fetch("örnek.json")
    .then(function(data){return data.json()})
    .then(function(responses){
        let output =  "<ul>"
        responses.forEach(function(response){
            output += `<li> başlık ${response.title}-- içerik ${response.body} </li>`
        })

        output+="</ul>"
        document.getElementById("output").innerHTML += output


    })
}


function getRestApi(){
    fetch("https://api.github.com/users")
    .then(function(data){return data.json()})
    .then(function(users){
        let output =  "<ul>"
        users.forEach(function(user){
            output+=`<li> kulanıcı adı: ${user.login}`
        })

        output += "</ul>"
        document.getElementById("output").innerHTML += output
    })
}