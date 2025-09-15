import { Tabs } from "expo-router";
import React from "react";
import TabBarIcon from "../../components/Icons/TabBarIcon";

import { Colors } from "../../constants/theme";

import { useColorScheme } from "../../hooks/use-color-scheme";
function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* <Tabs.Screen name="contact" options={{ title: "Contact" }} /> */}
    </Tabs>
  );
}

export default TabLayout;
