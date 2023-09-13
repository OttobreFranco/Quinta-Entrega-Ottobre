import { Pressable, Text } from "react-native";
import styles from './CategoryItem.style'

import { Card } from '../../../../components'

const CategoryItem = ( { category } ) => {
  return (
    <Pressable onPress={() => console.log(`esta es la categoria ${category}`)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{ category }</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

