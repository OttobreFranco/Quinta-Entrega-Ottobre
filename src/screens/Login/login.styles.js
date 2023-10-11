import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        backgroundColor: colors.tertiary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputEmail: {
        width: '95%',
        backgroundColor: colors.secondary,
        height: 30,
        marginVertical: 10,
    },
    loginButton: {
        width: '40%',
        height: 50,
        backgroundColor: colors.quaternary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius:10,
    },
    text: {
        color: '#fff', 
    },

});
