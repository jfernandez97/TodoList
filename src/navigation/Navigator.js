import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import Camera from "../screens/Camera";
import { Colors } from "../Constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/Home";
import { Login } from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { Register } from "../screens/Register";
import { SimpleLineIcons } from "@expo/vector-icons";
import Tasks from "../screens/Tasks";
import { auth } from "../firebase/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  const [user, setUser] = useState();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
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
            } else if (route.name === "Camera") {
              iconName = "camera-retro";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            } else if (route.name === "Login") {
              iconName = "sign-in-alt";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            } else if (route.name === "Register") {
              iconName = "user-plus";
              size = focused ? 25 : 20;
              color = focused ? Colors.primary : "#555";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerRight: () =>
            user && (
              <TouchableOpacity
                style={styles.logOut}
                onPress={() => handleSignOut()}
              >
                <SimpleLineIcons
                  name="logout"
                  size={25}
                  color={"#555"}
                ></SimpleLineIcons>
              </TouchableOpacity>
            ),
        })}
      >
        {user ? (
          <>
            <Tab.Screen name="Tasks" component={Tasks} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
              name="Camera"
              component={Camera}
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.primary,
                },
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logOut: {
    marginRight: 15,
  },
});
