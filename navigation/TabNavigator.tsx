import { ResourceScreen, LoginScreen } from "@/components/screens/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
          // tabBarIcon: ({ color, size }) => (
          //   <YourIconComponent name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarLabel: "login",
          // tabBarIcon: ({ color, size }) => (
          //   <YourIconComponent name="home" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
