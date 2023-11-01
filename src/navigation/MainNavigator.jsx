import { View, Text } from 'react-native'
import React , { useState } from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useSelector } from 'react-redux'


const MainNavigator = () => {

    // const [user,setUser] = useState(null)

    const user = useSelector(state => state.auth.user)

    console.log(user)

  // return user? <BottomTabNavigator/> : <AuthStackNavigator/>
  return <BottomTabNavigator/>
}

export default MainNavigator