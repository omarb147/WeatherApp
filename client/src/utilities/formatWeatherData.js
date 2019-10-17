import { formatKelvinToDegrees } from "./formatUnits";
import moment from "moment";

const TOTAL_FORECASTS = 5;

export const formatDailyWeatherData = data => {
  const city = data.city.name;
  const country = data.city.country;

  const forecast = data.list
    .map(forecast => {
      const { dt, temp, weather } = forecast;
      const weatherDetails = weather[0];
      const desc_key = weatherDetails.description.split(" ").join("_");

      return {
        date: dt,
        day: moment.unix(dt).format("MMM Do"),
        minTemp: formatKelvinToDegrees(temp.min),
        maxTemp: formatKelvinToDegrees(temp.max),
        temp: formatKelvinToDegrees(temp.day),
        description: weatherDetails.description,
        desc_key,
        icon: weatherDetails.icon,
        short_desc: weatherDetails.main,
        wid: weatherDetails.id
      };
    })
    .filter((forecast, index) => index < TOTAL_FORECASTS);

  return { city, country, forecast };
};

export const formatHourlyWeatherData = data => {
  return data.list.map(forecast => {
    const { dt, main, weather } = forecast;
    const weatherDetails = weather[0];

    const time = moment.unix(dt);
    const timeFrom = moment(time).format("HH:mm");
    const timeTo = moment(time)
      .add(3, "hours")
      .format("HH:mm");

    return {
      day: moment.unix(dt).format("MMM Do"),
      timeFrom,
      timeTo,
      minTemp: formatKelvinToDegrees(main.temp_min),
      maxTemp: formatKelvinToDegrees(main.temp_max),
      temp: main.temp,
      description: weatherDetails.description,
      icon: weatherDetails.icon,
      short_desc: weatherDetails.main,
      wid: weatherDetails.id
    };
  });
};
