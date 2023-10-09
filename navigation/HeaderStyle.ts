import { StackNavigationOptions } from "@react-navigation/stack";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";

export const getCommonHeaderStyles = (
  routeName: RouteNames
): StackNavigationOptions => {
  let backgroundColor = Colors.primary;

  if (routeName === "EditProfile") {
    backgroundColor = Colors.white;
  }

  return {
    headerStyle: {
      backgroundColor,
      elevation: 0,
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
