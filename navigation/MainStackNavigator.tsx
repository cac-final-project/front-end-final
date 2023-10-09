import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import { getCommonHeaderStyles } from "./HeaderStyle";
import { RouteNames } from "@/typings/StackParam";
import {
  Neighborhood,
  Profile,
  HeaderBackButton,
  Edit,
  Username,
  Done,
  EditTitle,
} from "@/components/common/header";
import {
  LoginScreen,
  WeatherScreen,
  AlertScreen,
  ProfileScreen,
  EditProfileScreen,
  WeatherDetail,
} from "@/components/screens/index";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        console.log(route); // tab, login etc....
        const dynamicHeaderStyles = getCommonHeaderStyles(
          route.name as RouteNames
        );
        return {
          ...dynamicHeaderStyles,
          headerTitle: (props) => {
            if (route.name === "Profile") {
              return <Username />;
            } else if (route.name === "EditProfile") {
              return <EditTitle />;
            } else if (
              route.name === "Weather" ||
              route.name === "WeatherDetail" ||
              route.name === "Alert" ||
              route.name === "Login"
            ) {
              return <></>;
            }
            return <Neighborhood />;
          },
          headerRight: (props) => {
            if (route.name === "Profile") {
              return <Edit />;
            } else if (route.name === "EditProfile") {
              return <Done />;
            } else if (
              route.name === "Weather" ||
              route.name === "WeatherDetail" ||
              route.name === "Alert" ||
              route.name === "Login"
            ) {
              return <></>;
            }
            return <Profile />;
          },
          headerLeft: (props) => (
            <>
              {props.canGoBack && (
                <HeaderBackButton
                  {...props}
                  routename={route.name as RouteNames}
                />
              )}
            </>
          ),
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
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="WeatherDetail"
        component={WeatherDetail}
        options={{ title: "My Tabs" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
