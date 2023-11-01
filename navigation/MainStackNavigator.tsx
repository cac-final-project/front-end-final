import React from "react";
import { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import { getCommonHeaderStyles } from "./HeaderStyle";
import { RouteNames } from "@/typings/StackParam";
import { WriteType } from "@/typings/heatLevels";
import {
  Neighborhood,
  Profile,
  HeaderBackButton,
  Edit,
  Username,
  Done,
  EditTitle,
  WriteOrEdit,
  EditPost,
  CommentWrite,
} from "@/components/common/header";
import {
  LoginScreen,
  WeatherScreen,
  AlertScreen,
  ProfileScreen,
  EditProfileScreen,
  WeatherDetail,
  SignupScreen,
  ForgotPwScreen,
  PostEditScreen,
  PostDetailScreen,
  PostDetailMapViewScreen,
  EditTagScreen,
  EditLocationScreen,
  OtherProfileScreen,
  CommentScreen,
} from "@/components/screens/index";
import { RootStackParamList } from "@/typings/StackParam";
type PostEditRouteProp = RouteProp<RootStackParamList, "PostEdit">;

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        // console.log(route); // tab, login etc....
        const dynamicHeaderStyles = getCommonHeaderStyles(
          route.name as RouteNames
        );
        return {
          ...dynamicHeaderStyles,
          headerTitle: (props) => {
            if (route.name === "Profile") {
              // return <Username />;
              return <></>;
            } else if (route.name === "OtherProfile") {
              return <Username />;
            } else if (route.name === "EditProfile") {
              return <EditTitle />;
            } else if (
              route.name === "PostEdit" ||
              route.name === "PostEditTags" ||
              route.name === "PostEditLocation"
            ) {
              return <WriteOrEdit />;
            } else if (
              route.name === "Weather" ||
              route.name === "WeatherDetail" ||
              route.name === "Alert" ||
              route.name === "Login" ||
              route.name === "Signup" ||
              route.name === "ForgotPw"
            ) {
              return <></>;
            } else if (route.name === "CommentWrite") {
              return <CommentWrite />;
            }
            return <Neighborhood />;
          },
          headerRight: (props) => {
            if (route.name === "Profile") {
              return <Edit />;
            } else if (
              route.name === "EditProfile" ||
              route.name === "PostEditTags" ||
              route.name === "CommentWrite"
            ) {
              return <Done />;
            } else if (route.name === "PostEdit") {
              const params = route.params as PostEditRouteProp["params"];
              const { write_type } = params;

              return <EditPost write_type={write_type as WriteType} />;
            } else if (
              route.name === "Weather" ||
              route.name === "WeatherDetail" ||
              route.name === "Alert" ||
              route.name === "Login" ||
              route.name === "Signup" ||
              route.name === "ForgotPw" ||
              route.name === "PostEditLocation"
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
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="ForgotPw"
        component={ForgotPwScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="PostEdit"
        component={PostEditScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="PostDetailMapView"
        component={PostDetailMapViewScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="PostEditTags"
        component={EditTagScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="PostEditLocation"
        component={EditLocationScreen}
        options={{ title: "My Tabs" }}
      />

      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={{ title: "My Tabs" }}
      />
      <Stack.Screen
        name="CommentWrite"
        component={CommentScreen}
        options={{ title: "My Tabs" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
