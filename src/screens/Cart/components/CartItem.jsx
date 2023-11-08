import { Pressable, Text, View, Image } from "react-native";
import React from "react";
import styles from "./CartItem.styles";
import Feather from "@expo/vector-icons/Feather";


const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>Precio unitario: ${item.price}</Text>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
