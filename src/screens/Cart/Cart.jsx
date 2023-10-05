import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";

import styles from "./Cart.styles";
import cart from "../../data/cart";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  const total = useSelector((state) => state.cart);

  const renderItem = ({item}) => <CartItem item={item} />;

  console.log(cart)

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text style={styles.text}>Confirm</Text>
          <View>
            <Text style={styles.text}>{`Total $ ${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
