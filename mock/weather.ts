export type WeatherDetailType = {
  description: string;
  happens: string;
  water: string;
  clothes: string;
  shelter: string;
};

type WeatherData = {
  [key: number]: WeatherDetailType;
};

export const weatherData: WeatherData = {
  1: {
    description:
      "The temperature is a bit warmer than usual. It’s okay to be outside, but make sure you have some water with you just in case!",
    happens: "Minor discomfort, slight dehydration if not cautious.",
    water: "Drink a bottle of water every hour",
    clothes: "Wear light-colored clothing",
    shelter: "Stay in the shade when outside",
  },
  2: {
    description:
      "It's getting hotter. Be cautious if you're spending a lot of time outside, especially during midday.",
    happens: "Increased risk of dehydration, heat cramps and fatigue.",
    water: "Drink 2 bottles of water hourly",
    clothes: "Put on a hat or sunglasses",
    shelter: "Stay indoors or in shaded areas",
  },
  3: {
    description:
      "It's very hot outside. Limit your time outside, especially when the sun is at its peak.",
    happens:
      "High risk of heat exhaustion, heat cramps, and significant dehydration. Prolonged exposure can lead to heat stroke.",
    water: "Drink 3 or more bottles of water hourly",
    clothes: "Wet a cloth and place it on your forehead or neck to cool down",
    shelter: "Stay indoors during midday (10~16)",
  },
  4: {
    description:
      "The heat outside is at dangerous levels. It's best to stay inside to avoid health risks.",
    happens:
      "Extremely high risk of heat stroke, which is a medical emergency and can be fatal. Other potential risks include severe dehydration, organ damage, and heat-related illnesses that require immediate medical attention.",
    water: "Always carry water and drink regularly",
    clothes: "Apply SPF 30+ sunscreen and cover as much skin as you can",
    shelter: "Stay indoors as much as possible",
  },
};
