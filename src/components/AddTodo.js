import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Colors } from "../Constants/Colors";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  const clearText = () => {
    setText("");
  };
  return (
    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Write a new Task..."
        value={text}
        onChangeText={changeHandler}
      ></TextInput>
      <TouchableOpacity onPress={() => submitHandler(text)}>
        <View style={styles.addWrapper}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 6,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 280,
    backgroundColor: "#FFF",
    fontFamily: "robotoCondensedBold",
  },
  addWrapper: {
    width: 42,
    height: 42,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginRight: 2,
  },
});
