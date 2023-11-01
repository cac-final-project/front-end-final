import axios from "axios";
import { GOOGLE_API_KEY } from "@env";

interface IGetPlacesApi {
  query: string;
  latitude: number;
  longitude: number;
  radius: number;
}

export const getPlacesApi = async ({
  query,
  latitude,
  longitude,
  radius,
}: IGetPlacesApi) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=${latitude},${longitude}&radius=${radius}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part of the response
  } catch (err) {
    console.error(err);
    // Handle the error as needed
    // For instance, you might want to return a default/fallback response
    return {
      predictions: [],
      status: "REQUEST_FAILED",
    };
  }
};

export const getPlaceDetails = async (placeId: string) => {
  try {
    // Include 'geometry' in the fields parameter to get lat and lon
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    return response.data; // Return only the data part of the response
  } catch (err) {
    console.error(err);
    return null;
  }
};
