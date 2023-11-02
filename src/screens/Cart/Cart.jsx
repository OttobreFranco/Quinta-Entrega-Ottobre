import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./Cart.styles";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  const total = useSelector((state) => state.cart.total);

  const [ triggerPost , result ] = usePostOrderMutation()

  // const {items , total } = useSelector(state => state.cart) ;

  const renderItem = ({item}) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({total , cart, user: 'LoggedUser'})
    console.log("Confirmando compra")
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable onPress={confirmCart}>
          <Text style={styles.text}>Confirm</Text>
          <View>
            <Text style={styles.text}>{`Total $ ${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
};

export default Cart;
