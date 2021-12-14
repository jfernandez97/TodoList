import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function TodoItem({ item, completeHandler }) {
  return (
    <TouchableOpacity onPress={() => completeHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons
          style={styles.itemIcon}
          name="delete"
          size={18}
          color="#333"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    flex: 1,
    fontFamily: "NunitoRegular",
  },
});
