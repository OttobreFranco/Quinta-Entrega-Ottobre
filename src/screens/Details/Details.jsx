import { Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./Details.styles";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

const Details = ({ route }) => {
  const { product } = route.params;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <View style={styles.container}>
      <Header title={"Detalle"} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.images[0] }} />
      </View>

      <Text style={styles.title}> {product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}> $ {product.price} </Text>
      <TouchableOpacity onPress={handleAddToCart} >
        <Text style={styles.boton}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
