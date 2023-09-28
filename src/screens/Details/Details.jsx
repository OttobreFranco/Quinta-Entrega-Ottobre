import {  Text, View, Image } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./Details.styles";
import { useSelector } from "react-redux";


const Details = ({ route }) => {

  const { product } = route.params

  const counter = useSelector(state => state.counter.value)

  return (
    <View style={styles.container}>
      <Header title={'Detalle'} />
      <Image
        style={styles.image} source={{uri:product.images[0]}} 
      />
      <Text style={styles.title}> { product.title }</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}> $ {product.price} </Text>
      <Text>Valor del contador {counter}</Text>
    </View>
  );
};

export default Details;
