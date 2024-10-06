//elementleri seçme

const input = document.getElementById('input')
const cityname = document.querySelector(".cityName")
const degree = document.querySelector(".degree")
const desc = document.querySelector(".desc")


const weatherApi = new WeatherAPI();


input.addEventListener("keypress",findWeatherInfo)

function findWeatherInfo(e){
    if(e.keyCode=='13'){//enter ascıı kodu 13. Burası entere basmış demektir
        const city = input.value.trim()//benim inputa girdiğim şehiri yakaladım
        weatherApi.GetWeatherName(city)//return edilen data burya gelir. promise döner
        .then(data=>{
            if(data.message=='city not found'){
                alert("Şehir bulunamadı")   
                input.value =  ""
            }
            display(data);
        })
        .catch(err=>console.log(err))//hata olursa hatayı yakalayacağım

    }

}


function display(eleman){
    cityname.textContent = eleman.name;
    degree.textContent = eleman.main.temp;
    desc.textContent = eleman.weather[0].description;
    input.value =  ""

}

