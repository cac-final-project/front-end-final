import { IAlert } from "@/typings/emergency";

interface GetEmergencyApiProps {
  county: string;
}

export const getEmergencyApi = async ({ county }: GetEmergencyApiProps) => {
  try {
    let response = await fetch("https://api.weather.gov/alerts/active?area=TX");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let json = await response.json();

    const alerts: IAlert[] = json.features;

    // Find the first alert that matches the county
    const foundAlert = alerts.find((alert) =>
      alert.properties.areaDesc.includes(county)
    );

    return foundAlert; // This will be either the first found Alert or undefined
  } catch (err) {
    console.error("Error fetching emergency data:", err);
    return false;
  }
};
