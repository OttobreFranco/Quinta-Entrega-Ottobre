import { Pressable, Text , useWindowDimensions } from "react-native";
import styles from './ModelItem.style'
import { useEffect } from "react";
import { Card } from '../../../../components'
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../../../../features/shop/shopSlice";


const ModelItem = ( { category , navigation } ) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => {

    navigation.navigate('Details', { category: item })
    }
    }>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}> {category} </Text>
      </Card>
     
    </Pressable>
  );
};

export default ModelItem;
