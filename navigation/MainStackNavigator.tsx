import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import { Colors } from "@/constants/Colors";
import {
  Neighborhood,
  Profile,
  HeaderBackButton,
} from "@/components/common/header";
import LoginScreen from "@/components/screens/login/LoginScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        console.log(route); // tab, login etc....

        return {
          headerTitle: (props) => <Neighborhood />,
          headerRight: (props) => <Profile />,
          headerLeft: (props) => {
            return <>{props.canGoBack && <HeaderBackButton {...props} />}</>;
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
        };
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "My Tabs" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
