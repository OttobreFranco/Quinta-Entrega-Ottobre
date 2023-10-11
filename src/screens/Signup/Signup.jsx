import { StyleSheet, Text, TextInput, View , Pressable} from 'react-native'
import React from 'react'
import styles from './signup.styles'

const Signup = () => {
  return (
    <View style={styles.container}>
    <View style={styles.loginContainer}>
      <Text>
          Sign up to start
      </Text>
      <TextInput style={styles.inputEmail}/>
      <TextInput style={styles.inputEmail}/>
      <Pressable style={styles.loginButton}>
          <Text style={styles.text}>Sign up</Text>
      </Pressable >
      <Text>Already have an account?</Text>
      <Pressable style={styles.loginButton}>
          <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  </View>
  )
}

export default Signup
