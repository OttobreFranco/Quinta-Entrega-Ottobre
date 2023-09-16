import { Pressable, Text } from "react-native";
import styles from './CategoryItem.style'

import { Card } from '../../../../components'

const CategoryItem = ( { category ,setCategorySelected } ) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{ category }</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

