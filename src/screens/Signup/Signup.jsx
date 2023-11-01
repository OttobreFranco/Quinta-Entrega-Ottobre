import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./signup.styles";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass)
    triggerSignup({
      email,
      password,
    })
    console.log(result)
    if (result.isSuccess) {
      dispatch(setUser(result.data))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.text}>Sign up</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable style={styles.loginButton}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
