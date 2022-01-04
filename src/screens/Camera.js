import * as ImagePicker from "expo-image-picker";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Colors } from "../Constants/Colors";

const Camera = (props) => {
  const [pickedUri, setPickedUri] = useState();
  const [aux, setAux] = useState(true);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status != "granted") {
      Alert.alert(
        "Required permissions",
        "To continue, this app needs to have camera permissions",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const isCamaraOk = await verifyPermissions();
    if (!isCamaraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    setImage(image.uri);
    setAux(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.preview}>
          {!aux ? (
            <Text>Take a photo and you will see it here!</Text>
          ) : (
            <Image style={styles.image} source={{ uri: pickedUri }} />
          )}
        </View>

        <TouchableOpacity style={styles.boton} onPress={handleTakeImage}>
          <Text style={styles.touchableTitle}>TAKE A PHOTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#E8EAED",
  },
  boton: {
    backgroundColor: Colors.primary,
    padding: 15,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 8,
    borderRadius: 60,
  },
  touchableTitle: {
    fontSize: 15,
    color: "white",
  },
  frame: {
    marginBottom: 10,
    width: "94%",
    alignSelf: "center",
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Camera;
