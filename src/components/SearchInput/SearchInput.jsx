import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import styles from './SearchInput.stlyle'

const SearchInput = ({ onSearch }) => {
  const [Value, setValue] = useState("");

  const search = () => {
    onSearch(Value);
  };

  const clearInput = () => {
    setValue("");
    onSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={Value}
        onChangeText={setValue}
        placeholder="Search product"
        placeholderTextColor={'white'}
        style={styles.input}
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color={"black"} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircleo" size={25} color={"black"} />
      </Pressable>
    </View>
  );
};

export default SearchInput;

