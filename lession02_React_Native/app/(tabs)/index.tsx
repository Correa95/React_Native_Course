import { View, Text StyleSheet} from "react-native";
import React from "react";

function App() {
  return (
    <View>
      <Text>Coffee Shop</Text>
    </View>
  );
}

export default App;
const Style = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column",


  },
  text:{
    color:"white",
    fontSize:42,
    fontWeight: "bold",
    textAlign: "center"
  }
})
