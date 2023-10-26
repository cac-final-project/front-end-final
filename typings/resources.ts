export type TAmenities =
  | "bench"
  | "drinking_water"
  | "toilets"
  | "shower"
  | undefined;

export type TResource = {
  id: number;
  lat: number;
  lon: number;
  address: string;
  amenity: TAmenities;
  tags: string[];
  distance: number;
};
