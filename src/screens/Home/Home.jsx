import { View, FlatList, SafeAreaView } from "react-native";

import { CategoryItem } from "./components";
import { Header } from "../../components";
import styles from "./Home.style";
import { useGetCategoriesQuery } from "../../services/shopApi";
//prueba edit
const Home = ({ navigation }) => {

  const { data , isLoading } = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
      
      <Header title={"Categories"} />
      <View>
        <FlatList
          data={data}
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
