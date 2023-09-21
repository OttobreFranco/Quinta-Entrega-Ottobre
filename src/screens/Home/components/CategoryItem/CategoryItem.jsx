import { Pressable, Text , useWindowDimensions } from "react-native";
import styles from './CategoryItem.style'
import { useEffect } from "react";
import { Card } from '../../../../components'

const CategoryItem = ( { category , navigation } ) => {

  return (
    <Pressable onPress={() => navigation.navigate('Products', { category })}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}> {category} </Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
