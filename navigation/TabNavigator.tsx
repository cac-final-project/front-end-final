import { Image } from "react-native";
import { ResourceScreen, PostsScreen } from "@/components/screens/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabClickedIcon = require("@/assets/images/TabClicked.png");
const TabNotClickedIcon = require("@/assets/images/TabNotClicked.png");

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Resource"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#F8F8F8",
        tabBarStyle: {
          backgroundColor: "#633689",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Resource"
        component={ResourceScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Resource",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Image source={TabClickedIcon} />;
            } else {
              return <Image source={TabNotClickedIcon} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Community",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Image source={TabClickedIcon} />;
            } else {
              return <Image source={TabNotClickedIcon} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
