import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

  },
  image: {
    width:300,
    height: 300,
    margin: 40,
  },
  cameraButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 180,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  text:{
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 16,
  },
  botoneraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },

});
