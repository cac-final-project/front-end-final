import ResourceScreen from "@/components/screens/resources/ResourceScreen";
import LoginScreen from "@/components/screens/login/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="resource"
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
        name="resource"
        component={ResourceScreen}
        options={{
          tabBarLabel: "resource",
          // tabBarIcon: ({ color, size }) => (
          //   <YourIconComponent name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
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
