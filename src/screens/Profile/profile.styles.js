import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  cameraButton: {
    backgroundColor: colors.secondary,
    height: 50,
    width: '30%',
    borderRadius: 10,
  },
});