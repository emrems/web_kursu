class WeatherAPI{
    constructor(){
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "7b0ad348d75d4aba4e8e41436d2b31e1";
    }
    async GetWeatherName(cityname){
        const response = await fetch(`${this.baseUrl}?q=${cityname}&appid=${this.apiKey}&units=metric&lang=tr`)//geriye response tipinde  promise döner
        const data = await response.json();
        return data;

    }
}

