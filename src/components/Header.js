import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../Constants/Colors";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: Colors.primary,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
});
