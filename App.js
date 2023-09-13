import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home , Products } from "./src/screens";

export default function App() {
  return <Products category={'smartphones'}/>
}
