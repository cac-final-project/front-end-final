import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import useAppFonts from "@/state/hooks/useAppFonts";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator";
import { RecoilRoot } from "recoil";

enableScreens();

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <RecoilRoot>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}
