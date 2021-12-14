import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import AddTodo from "../components/AddTodo";
import { Colors } from "../Constants/Colors";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";

export default function Tasks({ navigation }) {
  const [taskItems, setTaskItems] = useState([]);

  const completeHandler = (key) => {
    setTaskItems((prevTasks) => {
      return prevTasks.filter((task) => task.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 1) {
      setTaskItems((prevTasks) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTasks];
      });
    } else {
      Alert.alert("OUCH!", "Tasks cannot be empty!", [{ text: "Okey!" }]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={taskItems}
              renderItem={({ item }) => (
                <TodoItem item={item} completeHandler={completeHandler} />
              )}
            ></FlatList>
          </View>
          <Button
            onPress={() => {
              navigation.navigate("Home");
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
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
