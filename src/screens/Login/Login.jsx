import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import loginStyles from './login.styles'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>
            Login to start
        </Text>
        <TextInput style={styles.inputEmail}/>
        <TextInput style={styles.inputEmail}/>
        <Pressable style={styles.loginButton}>
            <Text style={styles.text}>Login</Text>
        </Pressable >
        <Text>No have an account?</Text>
        <Pressable style={styles.loginButton}>
            <Text style={styles.text}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
