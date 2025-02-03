const apikey = "--Your Weather Api Key from http://openweathermap.org--";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function checkWeather(city){
   const response = await fetch(apiurl + city + `&appid=${apikey}`);

   if(response.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display = "none";
   }
   else{
      var data = await response.json();
      
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display="none";

      document.querySelector(".city-name").innerHTML = data.name; 
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
      document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
   }
}

searchbtn.addEventListener("click",()=>{
   checkWeather(searchbox.value);
})
