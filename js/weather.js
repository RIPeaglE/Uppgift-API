import WEATHER_API_KEY from "./apiKey";

async function weath() {
    let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Huddinge&appid={}&units=metric");
    let data = await res.json();

    console.log(data);

    let infoH = document.createElement("div");
    let place = document.createElement("div");
    let temp = document.createElement("div");
    let weatherDescription = document.createElement("div");
    let placeInfo = document.createElement("div");
    let feelslike = document.createElement("div");
    let sky = document.createElement("div");
    let pressure = document.createElement("div");
    let placeSE = document.createElement("div");
    let humidity = document.createElement("div");
    let weatherIcon = document.createElement("img");

    infoH.setAttribute("id", "infoH");
    place.setAttribute("id", "place");
    temp.setAttribute("id", "temp");
    weatherDescription.setAttribute("id", "weatherDescription");
    placeInfo.setAttribute("id", "placeInfo");
    feelslike.setAttribute("id", "feelslike");
    sky.setAttribute("id", "sky");
    pressure.setAttribute("id", "pressure");
    humidity.setAttribute("id", "humidity");
    placeSE.setAttribute("id", "placeSE");
    weatherIcon.setAttribute('src','https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png');
    weatherIcon.setAttribute("class", "info1Icon")


    place.textContent = `${data.name}, `;
    placeSE.textContent = data.sys.country;
    temp.textContent = `${Math.floor(data.main.temp)}°C`;
    feelslike.textContent = `Feels like ${Math.floor(data.main.feels_like)}°C. `;
    sky.textContent = data.weather[0].description;
    pressure.textContent = `${data.main.pressure}hPa`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    
    weatherInfo1.appendChild(infoH);
    infoH.appendChild(placeInfo);
    placeInfo.appendChild(place);
    placeInfo.appendChild(placeSE);
    infoH.appendChild(temp);
    infoH.appendChild(weatherIcon);
    infoH.appendChild(weatherDescription);
    weatherDescription.appendChild(feelslike);
    weatherDescription.appendChild(sky);
    infoH.appendChild(pressure);
    infoH.appendChild(humidity);
}

weath();

fetch("https://api.openweathermap.org/data/2.5/forecast?q=Huddinge&appid=bbef72fb8d03c05330921e348bb1ca8f&units=metric")
  .then((res) => res.json())
  .then((json) =>
    json.list.forEach((data) => {
      weatherDays(data);
    })
  );

const weekday = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

const weatherDays = (data) => {
  var time = data.dt_txt.slice(-8);
  const d = new Date(data.dt_txt);
  let day = d.getDate();
  let month = months[d.getMonth()]; 

  if (time === "15:00:00") {
    var content = document.getElementById("weatherInfo2");

    var weatherDaily = document.createElement("div");
    var weatherTemp = document.createElement("p");
    var weatherDay = document.createElement("p");
    var weatherIcon = document.createElement("img");

    weatherDaily.setAttribute("class", "weatherDaily");

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("class", "weatherIcon");

    weatherTemp.innerText = Math.trunc(data.main.temp) + "° " + data.weather[0].description;
    weatherDay.innerText = `${weekday[d.getDay()]}, ${day} ${month}`;

    weatherDaily.appendChild(weatherDay);
    weatherDaily.appendChild(weatherIcon);
    weatherDaily.appendChild(weatherTemp);
    content.appendChild(weatherDaily);
  }
};