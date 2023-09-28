import { View, FlatList, SafeAreaView } from "react-native";

import dataCategories from "../../data/dataCategories";
import { CategoryItem } from "./components";
import { Header } from "../../components";
import styles from "./Home.style";
import Counter from "../../components/Counter";
//prueba edit
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Counter/>
      <Header title={"Categories"} />
      <View>
        <FlatList
          data={dataCategories}
          keyExtractor={(category) => category.title}
          renderItem={({ item }) => (
          <CategoryItem category={item.title} navigation={navigation} />
          )
                  
          }
        />
      </View>
    </View>
  );
};

export default Home;
