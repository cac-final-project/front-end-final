import { StackNavigationOptions } from "@react-navigation/stack";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";

export const getCommonHeaderStyles = (
  routeName: RouteNames
): StackNavigationOptions => {
  let backgroundColor = Colors.primary;

  // Example dynamic behavior: change header background for "Profile" screen
  if (routeName === "EditProfile") {
    backgroundColor = Colors.white; // or any other color for Profile screen
  }

  return {
    headerStyle: {
      backgroundColor,
    },
    headerTitleContainerStyle: {
      paddingBottom: 7,
    },
    headerLeftContainerStyle: {
      paddingBottom: 7,
      paddingLeft: 5,
    },
    headerRightContainerStyle: {
      paddingBottom: 7,
      paddingRight: 5,
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerBackTitleVisible: false,
  };
};
