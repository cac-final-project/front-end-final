export const convertFahrenheit = (kelvin: number) => {
  return Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
};
