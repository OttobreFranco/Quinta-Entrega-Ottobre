import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItemStyles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'

const CartItem = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>
                Nombre
            </Text>
        </View>
        <View>
            <View>
                <Text>Cantidad</Text>
                <Text>Precio</Text>
            </View>
            <Pressable>
                <Feather name ="trash" size={24} color={'red'}/>
            </Pressable>
        </View>
    </View>
  )
}

export default CartItem

