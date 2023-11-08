import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components";
import { Details, Home, Products , Models } from "../screens";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={({route}) => ({
        headerShown: false,
        
      }) }>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name ="Models" component={Models}/>
        {/* <Stack.Screen name="Products" component={Products} /> */}
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>

  );
}

export default StackNavigator