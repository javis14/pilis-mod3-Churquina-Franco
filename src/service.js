import axios from "axios";
export const getInfoWeather = async () => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.74&longitude=-65.41&timezone=America/Argentina/Jujuy`);
      return response.json();
    } catch {
      throw new Error('could not fetch color palettes');
    }
  };