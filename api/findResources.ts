import api from "./api";

interface FindResourcesProps {
  lat: number;
  lon: number;
}

export const findResourcesApi = async ({ lat, lon }: FindResourcesProps) => {
  try {
    const res = await api.get(`/resources?lat=${lat}&lon=${lon}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
