import axios from "axios";

const _APIKEY = "177a1700be2b5967d04f58923a3f874e";

const fetchCurrentWeather = city => {
  const encodedURI = window.encodeURI(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},US&type=accurate&APPID=${_APIKEY}`
  );
  axios.get(encodedURI).then(response => {
    console.log(response);
  });
};

const fetch5DayForecast = city => {
  const encodedURI = window.encodeURI(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},US&type=accurate&APPID=${_APIKEY}&cnt=5`
  );
  axios.get(encodedURI).then(response => {
    console.log(response);
  });
};

export default { fetchCurrentWeather, fetch5DayForecast };
