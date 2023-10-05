import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../../data/products";
import styles from "./Products.style";
import { Header, SearchInput } from "../../components";
import products from "../../data/products";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";
import { isLoading } from "expo-font";

const Products = ({ navigation }) => {

  const [keyword, setKeyword] = useState("");

  const category = useSelector(state => state.shop.categorySelected);

  const  { data , isLoading}   = useGetProductsByCategoryQuery(category);
  


  useEffect(() => {

    if (data) {
      
      const productsFiltered = products.filter((products) =>
        products.title.includes(keyword)
      );
    } 
  }, [keyword]);
  

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        { !isLoading && (
          <FlatList
            data={Object.values(data)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { product: item })
                }
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Products;
