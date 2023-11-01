import axios from "axios";
import { OPEN_WEATHER_API_KEY } from "@env";

const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getWeatherData = async (lat: number, lon: number) => {
  try {
    const response = await openWeatherApi.get("/weather", {
      params: {
        lat: lat,
        lon: lon,
        appid: OPEN_WEATHER_API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.log("weather_api", err);
    return null;
  }
};
