import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "../Constants/Colors";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new Task..."
        value={text}
        onChangeText={changeHandler}
      ></TextInput>
      <Button
        onPress={() => submitHandler(text)}
        title="Add Task"
        color={Colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 315,
    fontFamily: "robotoCondensed",
    fontWeight: "600",
  },
});
