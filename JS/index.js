

//https://api.weatherapi.com/v1/search.json?key=7bea53b6966f4f00b4e181928242006&q=lond

//7bea53b6966f4f00b4e181928242006

// 45f1515073647aa206cf04330f5d3336 
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=45f1515073647aa206cf04330f5d3336

async function getWeather(city){

    var weatther = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7bea53b6966f4f00b4e181928242006&q=${city}&days=3`)

    
    var finalWeather = await weatther.json();

    console.log(finalWeather);

    display(finalWeather);

}

getWeather("cairo");

var rowData = document.querySelector('.rowData');
var searchButton = document.querySelector('.buttom');
var searchInput = document.querySelector('.searchInput');

function display (finalWeather){
  
  const currentDay = new Date();
  const nextDay = new Date(currentDay );
  const nextNextDay = new Date(nextDay );
  
    var cartona = ``;

        cartona +=`

         <div class="card-group" id="cardGroup">
         <div class="card">
              <div class="card-header d-flex justify-content-between">
                <small class=""> ${new Date(finalWeather.forecast.forecastday[0].date).toLocaleString('en-US', { weekday: 'long' })}</small>
                <small>${finalWeather.forecast.forecastday[0].date}</small>
              </div>
              <div class="card-body">
                <h5 id="name" class="card-title">${finalWeather.location.name}</h5>
                <h1 id="tempreture" >${finalWeather.current.temp_c}°C</h1>
                <img src="https:${finalWeather.forecast.forecastday[0].day.condition.icon}" class="weatherIcon" alt="Weather Icon">
                <br/>
                <span class="weatherCondition text-primary">${finalWeather.current.condition.text}</span>

                <figure>
                  <img src="images/icon-umberella.png" alt="">
                  <small class="me-3">20%</small>
                
                  <img src="images/icon-wind.png" alt="">
                  <small class="me-4">18km/h</small>
                
                  <img src="images/icon-compass.png" alt="">
                  <small>East</small>
                </figure>

              </div>
              
        </div>
        
        <div class="card text-center" id="card2">
           <div class="card-header">
             <small >${new Date(finalWeather.forecast.forecastday[1].date).toLocaleString('en-US', { weekday: 'long' })}</small>
            </div>
           <div class="card-body">
              <img src="https:${finalWeather.forecast.forecastday[1].day.condition.icon}" class="weatherIcon1" alt="Weather Icon">
            <div>
              <h2 class="h4 text-light"> ${finalWeather.forecast.forecastday[1].day.maxtemp_c }°C</h2>
                 <small > ${finalWeather.forecast.forecastday[1].day.mintemp_c}°</small>
               <br/>
               <br/>
              <span id="weatherCondition" class="text-primary">${finalWeather.forecast.forecastday[1].day.condition.text}</span>
            </div>
        </div>

    </div>

      <div class="card text-center" >
        <div class="card-header">
           <small >${new Date(finalWeather.forecast.forecastday[2].date).toLocaleString('en-US', { weekday: 'long' })}</small>
          
        </div>
      <div class="card-body">
         <img src="https:${finalWeather.forecast.forecastday[2].day.condition.icon}" class="weatherIcon1" alt="Weather Icon">
      <div>
        <h2 class="h4 text-light"> ${finalWeather.forecast.forecastday[2].day.maxtemp_c }°C</h2>
        <small > ${finalWeather.forecast.forecastday[2].day.mintemp_c}°</small>
        <br/>
        <br/>
       <span id="weatherCondition" class="text-primary">${finalWeather.forecast.forecastday[2].day.condition.text}</span>
      </div>
    </div>

  </div>
  </div>

        `

    rowData.innerHTML = cartona;

}

searchInput.addEventListener('input' ,function(){
      // console.log("Hello");
    var searchTerm = searchInput.value;
      console.log(searchTerm);
      getWeather(searchTerm)
   })
