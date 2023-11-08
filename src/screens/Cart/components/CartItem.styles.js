import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },
  name: {
    fontSize: 18,
  },

  details: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: "40%",
    width: "85%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  image:{
    height: '100%',
    width: '100%',
},
});
