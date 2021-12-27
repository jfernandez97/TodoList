import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Colors } from "../Constants/Colors";
import React from "react";

export default function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Crear nota</Text>
        <TextInput
          style={styles.input}
          placeholder="Write a new Note..."
          onChangeText={() => {}}
        ></TextInput>
        <View style={styles.saveButton}>
          <Button
            title="Save a note"
            onPress={() => {}}
            color={Colors.primary}
          />
        </View>
        <View style={styles.goBackButton}>
          <Button
            onPress={() => {
              navigation.navigate("NotesStack");
            }}
            title="Go back"
            color={Colors.primary}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "NunitoBold",
    fontSize: 20,
    margin: 10,
  },
  input: {
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: "#FFF",
    fontFamily: "robotoCondensedBold",
  },
  saveButton: {
    position: "absolute",
    bottom: 60,
    marginHorizontal: 15,
    width: "92%",
  },
  goBackButton: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 15,
    width: "92%",
  },
});
