import { StackNavigationOptions } from "@react-navigation/stack";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";

export const getCommonHeaderStyles = (
  routeName: RouteNames
): StackNavigationOptions => {
  let backgroundColor = Colors.primary;

  if (
    routeName === "EditProfile" ||
    routeName === "PostEdit" ||
    routeName === "PostEditTags" ||
    routeName === "PostEditLocation"
  ) {
    backgroundColor = Colors.white;
  }

  return {
    headerStyle: {
      backgroundColor,
      elevation: 0,
    },
    headerTitleContainerStyle: {
      paddingVertical: 7,
    },
    headerLeftContainerStyle: {
      paddingVertical: 7,
      paddingLeft: 5,
    },
    headerRightContainerStyle: {
      paddingVertical: 7,
      paddingRight: 5,
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerBackTitleVisible: false,
  };
};
