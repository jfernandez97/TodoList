import { Button, StyleSheet, Text, View } from "react-native";

import { Colors } from "../Constants/Colors";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.button1}>
        <Button
          title="Go to tasks"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate("Tasks");
          }}
        />
      </View>
      <View style={styles.button2}>
        <Button
          title="Go to camera"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
  },

  button1: {
    marginTop: 30,
    marginHorizontal: 15,
    borderRadius: 60,
  },
  button2: {
    marginTop: 30,
    marginHorizontal: 15,
    borderRadius: 60,
  },
});
