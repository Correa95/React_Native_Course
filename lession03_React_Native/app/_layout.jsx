import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";

import { Appearance } from "react-native";
import { Colors } from "../constants/theme";
// import { useEffect } from "react";
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  // useEffect(()=>{})
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.HeaderBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="menu"
        options={{
          headerShown: true,
          title: "menu",
          headerTitle: "Coffee Shop Menu",
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: false,
          title: "Contact",
          headerTitle: "Contact Us",
        }}
      />

      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
