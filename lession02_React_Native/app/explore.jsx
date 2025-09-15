import { View, Text, StyleSheet } from "react-native";
function explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Explore Screen 🚀</Text>
    </View>
  );
}

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
