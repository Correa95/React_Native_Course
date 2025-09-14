import { View, Text, StyleSheet } from "react-native";
import React from "react";

function App() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Coffee Shop</Text>
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
