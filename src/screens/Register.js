import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Colors } from "../Constants/Colors";
import { auth } from "../firebase/config";

export const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: form.username,
        })
          .then((response) => console.log(response))
          .catch((error) => setError(error))
          .finally(() => {
            alert("User created!");
            setForm({ username: "", email: "", password: "", confirmPass: "" });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setError({ error });
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        blurOnSubmit={true}
        onChangeText={(text) => setForm({ ...form, username: text })}
        value={form.username}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...form, confirmPass: text })}
        value={form.confirmPass}
      />
      {error !== "" && <Text>{error.error.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.textButton}>Register</Text>
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
    textAlign: "center",
    fontFamily: "NunitoRegular",
  },
});
