import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import Navigator from "./src/navigation/Navigator";
import { StyleSheet } from "react-native";
import Tasks from "./src/screens/Tasks";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    robotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    robotoCondensedBold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <Navigator />;
}

const styles = StyleSheet.create({});
