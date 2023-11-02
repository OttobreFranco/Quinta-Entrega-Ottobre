import { Text, View, FlatList } from "react-native";
import React from "react";
import styles from "./Orders.styles";
import { useGetOrdersQuery } from "../../services/shopApi";

const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery();

  // console.log(data)
  return (
    <View styles={styles.container}>
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
          key={(item) => item}
        />
      )}
    </View>
  );
};

export default Orders;
