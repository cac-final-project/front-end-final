export const heatLevel = (temperatureInFahrenheit: number) => {
  if (temperatureInFahrenheit < 60) return 1;
  if (temperatureInFahrenheit >= 60 && temperatureInFahrenheit <= 74) return 1;
  if (temperatureInFahrenheit >= 75 && temperatureInFahrenheit <= 84) return 2;
  if (temperatureInFahrenheit >= 85 && temperatureInFahrenheit <= 94) return 3;
  return 4;
};
