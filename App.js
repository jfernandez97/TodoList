import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import AddTodo from "./src/components/AddTodo";
import AppLoading from "expo-app-loading";
import Header from "./src/components/Header";
import TodoItem from "./src/components/TodoItem";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    robotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    robotoCondensedBold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });
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

  if (!loaded) return <AppLoading />;

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
