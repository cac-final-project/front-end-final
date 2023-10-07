import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
  Weather: undefined;
  // Add other screen types if you have more than these
};

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Tabs"
>; // 'Tabs' can be any screen in the list
