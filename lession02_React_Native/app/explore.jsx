import { View, Text, StyleSheet } from "react-native";
function explore() {
  return (
    <div>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Explore Screen 🚀</Text>
      </View>
    </div>
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
