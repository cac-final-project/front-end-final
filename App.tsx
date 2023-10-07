import useAppFonts from "@/state/hooks/useAppFonts";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator";

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
