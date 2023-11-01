import { useEffect } from "react";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import useAppFonts from "@/state/hooks/useAppFonts";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "@/navigation/MainStackNavigator";
import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { locationAtom } from "@/state/atoms/location";
import { isLoadingAtom } from "./state/atoms/loading";
import LoadingOverLay from "./components/common/Loading";

import * as Location from "expo-location";

enableScreens();

function AppContent() {
  const [locationValue, setLocation] = useRecoilState(locationAtom);

  const fontsLoaded = useAppFonts();

  const isLoading = useRecoilValue(isLoadingAtom);
  useEffect(() => {
    if (fontsLoaded) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let { coords } = await Location.getCurrentPositionAsync({});
          // console.log(status);
          setLocation({ lat: coords.latitude, lon: coords.longitude });
        } else {
          setLocation({ lat: 30.270398, lon: -97.74285 });
          console.log("Location permission not granted");
        }
      })();
    }
  }, [fontsLoaded, setLocation]);

  if (!fontsLoaded || !locationValue) {
    return null;
  }

  return (
    <>
      <LoadingOverLay isLoading={isLoading} />
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
