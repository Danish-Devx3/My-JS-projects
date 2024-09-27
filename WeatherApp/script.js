const apikey="a03aba10205aa975ec83c8b42e1ff386"
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector(".searchImg img");
const search = document.querySelector(".search input")


async function checkWeather(city){
    const response= await fetch(url+ city +`&appid=a03aba10205aa975ec83c8b42e1ff386`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
    document.querySelector(".cityName").innerHTML= data.name;
}

searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);

})