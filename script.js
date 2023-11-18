

// console.log(city);
async function checkweather() {

  let weatherimg=document.querySelector('.weather-icon')
  let city = document.getElementById("city").value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fd4d5da7e953ebe3416d11d8327739fd`);
  const data = await response.json();
  console.log(data);

  document.querySelector('.temp').innerHTML=data.main.temp + "°C";
  document.querySelector('.result').innerHTML=city;
  document.querySelector('#hum').innerHTML=data.main.humidity + "%";
  document.querySelector('#wind').innerHTML=data.wind.speed +"km/h";


  if(data.weather[0].main=="Clouds"){
    weatherimg.src="images/clouds.png"
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherimg.src="images/drizzle.png"
  }
  else if(data.weather[0].main=="Mist"){
    weatherimg.src="images/mist.png"
  }
  else if(data.weather[0].main=="rain"){
    weatherimg.src="images/rain.png"
  }
  else if(data.weather[0].main=="Snow"){
    weatherimg.src="images/snow.png"
  }
  else{
    weatherimg.src="images/clear.png"
  }
  
}



