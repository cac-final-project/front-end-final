import api from "./api";

interface GetNeighborhoodApi {
  lat: number;
  lon: number;
}

export const getNeighborHoodApi = async ({ lat, lon }: GetNeighborhoodApi) => {
  try {
    const res = await api.get(`/geo?lat=${lat}&lon=${lon}`);
    return res.data;
  } catch (err) {
    console.log("neighborhood_api", err);
    return null;
  }
};
