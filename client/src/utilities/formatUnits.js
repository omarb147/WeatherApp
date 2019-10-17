import * as TYPES from "../Constants/Types";
export const formatKelvinToDegrees = temp => {
  return (temp - 273.15).toFixed(1);
};

const changeUnits = (temp, units) => {
  switch (units) {
    case TYPES.FARENHEIGHT: {
      return ((temp * 9) / 5 + 32).toFixed(1);
    }
    case TYPES.CELCIUS: {
      return (((temp - 32) * 5) / 9).toFixed(1);
    }
  }
};

export const changeForecastUnits = (forecast, units) => {
  return forecast.map(data => ({
    ...data,
    minTemp: changeUnits(data.minTemp, units),
    maxTemp: changeUnits(data.maxTemp, units),
    temp: changeUnits(data.temp, units)
  }));
};

export const formatDailyUnits = () => {};
