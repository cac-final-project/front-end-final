import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import { commonHeaderStyles } from "./HeaderStyle";
import {
  Neighborhood,
  Profile,
  HeaderBackButton,
  Edit,
  Username,
} from "@/components/common/header";
import {
  LoginScreen,
  WeatherScreen,
  AlertScreen,
  ProfileScreen,
} from "@/components/screens/index";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        console.log(route); // tab, login etc....

        return {
          ...commonHeaderStyles,
          headerTitle: (props) => {
            if (route.name === "Profile") {
              return <Username />;
            }
            return <Neighborhood />;
          },
          headerRight: (props) => {
            if (route.name === "Profile") {
              return <Edit />;
            }
            return <Profile />;
          },
          headerLeft: (props) => {
            return <>{props.canGoBack && <HeaderBackButton {...props} />}</>;
          },
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
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="Alert"
        component={AlertScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "My Tabs" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
