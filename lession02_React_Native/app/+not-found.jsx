import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={StyleSheet.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go To Home Screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

export default NotFoundScreen;
