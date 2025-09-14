import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import iceCoffeeImg from "@/assets/images/ice-Coffee-.webp";
function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground source={iceCoffeeImg}>
        <Text style={Styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
}

export default App;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
