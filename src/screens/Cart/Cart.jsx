import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./Cart.styles";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shopApi";
import { Header } from "../../components";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  const total = useSelector((state) => state.cart.total);

  const [triggerPost, result] = usePostOrderMutation();

  // const {items , total } = useSelector(state => state.cart) ;

  const renderItem = ({ item }) => <CartItem item={item} />;

  const confirmCart = () => {
    triggerPost({ total, cart, user: "LoggedUser" });
    console.log("Confirmando compra");
  };

  return (
    <View style={styles.container}>
      <Header title={"Mi Carrito"} />
      <View>
        {cart.length > 0 && (
          <View style={styles.cartList}>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
                <View>
                <Text style={styles.text}>{`Total $ ${total}`}</Text>
              </View>
            <TouchableOpacity onPress={confirmCart}>
              <Text style={styles.botonConfirm}>Confirm</Text>
            
            </TouchableOpacity>
        
          </View>
        )}
        {cart.length == 0 && (
          <View style={styles.body}>
            <Text style={styles.textEmpty}>
              No se han agregado productos al carrito
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Cart;
