import { Colors } from "../Constants/Colors";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Notes from "../screens/Notes";
import React from "react";
import Tasks from "../screens/Tasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            } else if (route.name === "Tasks") {
              iconName = "tasks";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            } else if (route.name === "Notes") {
              iconName = "sticky-note";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        })}
      >
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notes" component={Notes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
