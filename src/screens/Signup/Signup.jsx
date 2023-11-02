import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./signup.styles";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Signup = ({ navigation }) => {
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
        <Text>Sing up to start</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
         <Text>Password</Text>
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
         <Text>Confirm Password</Text>
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Sign up</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
