import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Colors } from "../Constants/Colors";
import React from "react";
import { auth } from "../firebase/config";
import { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setForm({ email: "", password: "" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        blurOnSubmit={true}
        textContentType="emailAddress"
        onChangeText={(text) => setForm({ ...form, email: text })}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, password: text })}
        value={form.password}
      />
      {error !== "" && <Text>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#E8EAED",
    alignItems: "center",
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
  button: {
    marginTop: 30,
    padding: 10,
    width: "40%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    borderRadius: 5,
    textAlign: "center",
    height: 80,
  },
  textButton: {
    fontSize: 25,
    color: "white",
    marginHorizontal: 20,
    fontFamily: "NunitoRegular",
    textAlign: "center",
  },
});
