import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { completeTask } from "../../store/actions/tasks.actions";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();

  const completeHandler = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <TouchableOpacity onPress={() => completeHandler(item.key)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square} />
          <Text Text style={styles.itemText}>
            {item.text}
          </Text>
        </View>
        <View style={styles.circular}></View>
        {/* <MaterialIcons
          style={styles.itemIcon}
          name="delete"
          size={18}
          color="#333"
        /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 8,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#BBAACC",
    borderRadius: 5,
    opacity: 0.7,
    marginRight: 15,
  },
  itemText: {
    flex: 1,
    fontFamily: "NunitoRegular",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#BBAACC",
    borderWidth: 2,
    borderRadius: 5,
  },
});
