import { useFonts } from "expo-font";

const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    // fontWeight: 400
    "PlusJakartaSans-Regular": require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),

    // fontWeight: 500
    "PlusJakartaSans-Medium": require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),

    // fontWeight: 600
    "PlusJakartaSans-SemiBold": require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),

    // fontWeight: 700
    "PlusJakartaSans-Bold": require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),

    // fontWeight: 800
    "PlusJakartaSans-ExtraBold": require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  return fontsLoaded;
};

export default useAppFonts;
