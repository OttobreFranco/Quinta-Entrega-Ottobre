import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  body: {
    justifyContent: "center",
    height: "90%",
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
  textEmpty: {
    textAlign: "center",
    fontSize: 30,
    padding: 40,
  },
  botonConfirm: {
    backgroundColor: colors.primary,
    color: "white",
    width: "40%",
    alignSelf: "center",
    textAlign: "center",
    verticalAlign: "middle",
    padding: 20,
    fontSize: 20,
  },
  cartList: {
    height: '90%',
  },
});
