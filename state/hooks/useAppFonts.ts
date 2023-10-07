import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    "PlusJakartaSans-Medium": require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
    // Add other font loads here as you require them
  });

  return fontsLoaded;
};

export default useAppFonts;
