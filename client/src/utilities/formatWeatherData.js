export const formatDailyWeatherData = data => {
  const city = data.city.name;
  const country = data.city.country;

  const forecast = data.list.map(forecast => {
    const { dt, temp, weather } = forecast;
    const weatherDetails = weather[0];

    return {
      date: dt,
      minTemp: temp.min,
      maxTemp: temp.max,
      temp: temp.day,
      description: weatherDetails.description,
      icon: weatherDetails.icon,
      short_desc: weatherDetails.main,
      wid: weatherDetails.id
    };
  });

  return { city, country, forecast };
};

export const formatHourlyWeatherData = data => {
  return data.list.map(forecast => {
    const { dt, main, weather } = forecast;
    const weatherDetails = weather[0];

    return {
      date: dt,
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      temp: main.temp,
      description: weatherDetails.description,
      icon: weatherDetails.icon,
      short_desc: weatherDetails.main,
      wid: weatherDetails.id
    };
  });
};
