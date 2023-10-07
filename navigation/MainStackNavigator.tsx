import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ title: "My Tabs" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
