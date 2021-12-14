import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
      <Button
        title="Go to tasks"
        onPress={() => {
          navigation.navigate("Tasks");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
