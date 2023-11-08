import { Pressable, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CartItem.styles";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../features/cart/cartSlice";

// const dispatch = useDispatch();

// const onHandleDelete = () => {
//   dispatch({removeItem(payload: product.id)
//   })
// }
// const dispatch = useDispatch();
// const cartItems = useSelector((state) => state.cart.items);

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const onHandleDelete = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.cartButton}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>
          <Text>Precio unitario: ${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={onHandleDelete}>
          <Text style={styles.deleteText}>Borrar </Text>
          <Feather name="trash" size={24} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// removeItem: (state, action) => {
//   const products = state.items
//   const filteredItems = products.filter(product => product.id !== action.payload.id)
//   const totalUpdated = state.total - (products.find(product => product.id === action.payload.id)).price
//   return {
//     ...state,
//     items: filteredItems,
//     total: totalUpdated
//   }
// }

export default CartItem;
