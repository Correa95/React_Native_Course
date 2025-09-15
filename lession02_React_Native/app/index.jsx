import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Link } from "expo-router";

function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require("../assets/images/VietnameseIcedCoffee.jpg")}
        style={Styles.image}
      >
        <Text style={Styles.text}>Coffee Shop</Text>
        <link href="/explore">Explore</link>
      </ImageBackground>
    </View>
  );
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
});
