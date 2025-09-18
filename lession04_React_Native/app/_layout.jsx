import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

function _layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaProvider>
  );
}

export default _layout;
