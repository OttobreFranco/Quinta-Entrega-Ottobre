import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
        height: '100%',
        width: '100%',
    },
    imageContainer:{
        height: '40%',
        width: '85%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    title:{
        fontSize: 30,
        fontFamily: 'OswaldLight',
        margin: 5,
    },
    description:{
        margin: 10,
        fontSize: 20,
    },
    price:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    boton: {
        backgroundColor: colors.primary,
        color: 'white',
        width: '40%',
        alignSelf: 'center',
        textAlign:'center',
        verticalAlign: 'middle',
        padding: 20,
        fontSize: 20,
        
    },

   
});
