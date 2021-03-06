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
        {/* <TextInput
          style={styles.input}
          placeholder="Write a new Note..."
          onChangeText={() => {}}
        ></TextInput> */}
        <View style={styles.createButton}>
          <Button
            title="Create a note"
            onPress={() => {
              navigation.navigate("CreateNoteStack");
            }}
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
  createButton: {
    marginHorizontal: 15,
    marginTop: 20,
  },
});
