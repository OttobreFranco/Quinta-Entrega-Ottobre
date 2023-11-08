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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
