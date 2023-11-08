import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Models.style";
import { Card, Header, SearchInput } from "../../components";
import ModelItem from "./components/ModelItem/ModelItem";
import { useSelector } from "react-redux";
import {
  useGetModelsByCategoryQuery,
  useGetModelsQuery,
  useGetProductsByCategoryQuery,
} from "../../services/shopApi";

const Models = ({ navigation }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  // const { data , isLoading } = useGetModelsQuery();

  // console.log("category: " + category)
  // console.log("data: " + data)

  if (!isLoading) {
    console.log("Categoria : " + category);
    console.log("data: " + data);
  }

  // if (data === undefined || data === null) {
  //   return <Text>No se encontraron datos</Text>;
  // }

  return (
    <View style={styles.container}>
      <Header title={`${category}`} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Details", { product: item });
                }}
              >
                <Card style={styles.cardContainer}>
                  <Text style={styles.text}> {item.title} </Text>
                </Card>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Models;
