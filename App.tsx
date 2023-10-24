import { useEffect } from "react";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import useAppFonts from "@/state/hooks/useAppFonts";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { locationAtom } from "@/state/atoms/location";
import * as Location from "expo-location";

enableScreens();

function AppContent() {
  const setLocation = useSetRecoilState(locationAtom);
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation({ lat: coords.latitude, lon: coords.longitude });
      })();
    }
  }, [fontsLoaded, setLocation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}
