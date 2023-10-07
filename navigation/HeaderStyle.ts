import { StackNavigationOptions } from "@react-navigation/stack";
import { Colors } from "@/constants/Colors";

export const commonHeaderStyles: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
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
