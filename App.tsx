import { useEffect } from "react";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import useAppFonts from "@/state/hooks/useAppFonts";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { locationAtom } from "@/state/atoms/location";
import { resourcesIsLoadedAtom } from "./state/atoms/loading";
import LoadingOverLay from "./components/common/Loading";

import * as Location from "expo-location";

enableScreens();

function AppContent() {
  const setLocation = useSetRecoilState(locationAtom);
  const fontsLoaded = useAppFonts();

  const resourcesIsLoadedValue = useRecoilValue(resourcesIsLoadedAtom);

  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        let { coords } = await Location.getCurrentPositionAsync({});
        console.log("real coords", coords);
        setLocation({ lat: coords.latitude, lon: coords.longitude });
      })();
    }
  }, [fontsLoaded, setLocation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <LoadingOverLay isLoaded={resourcesIsLoadedValue} />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}
