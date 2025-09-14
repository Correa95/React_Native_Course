import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require("@/assets/images/VietnameseIcedCoffee.jpg")}
        resizeMode="cover"
        style={Styles.image}
      >
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
  image: {
    width: "100%",
    height: "%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
