import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddTodo from "../components/AddTodo";
import { Colors } from "../Constants/Colors";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import { addTask } from "../../store/actions/tasks.actions";

export default function Tasks({ navigation }) {
  // const [taskItems, setTaskItems] = useState([]);

  const { tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const submitHandler = (text) => {
    if (text.length > 1) {
      dispatch(addTask({ text, key: Math.random().toString() }));
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
        {/* <Header /> */}
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => <TodoItem item={item} />}
            ></FlatList>
          </View>
          <Button
            style={styles.goBackButton}
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
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8EAED",
  },
  list: {
    flex: 1,
    marginTop: 5,
  },
});
