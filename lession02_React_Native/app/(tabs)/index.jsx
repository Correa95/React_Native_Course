import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
// import iceCoffeeImg from "@/assets/images/ice-Coffee-.webp";
function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require("./assets/images/ice-Coffee-.webp")}
        resizeMode="cover"
        Style={Styles.image}
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
  },
});
