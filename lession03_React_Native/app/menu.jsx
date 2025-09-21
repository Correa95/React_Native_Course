// Import core React Native components and APIs
import {
  StyleSheet, // for styling
  Appearance, // detects system color scheme (light/dark)
  Platform, // detects whether app is running on iOS, Android, Web
  SafeAreaView, // ensures content doesn't overlap status bar / notches
  ScrollView, // scrollable container (used for web fallback)
  FlatList, // optimized list renderer
  View, // basic container component
  Text, // text rendering
  Image, // image rendering
} from "react-native";

// Import custom theme colors
import { Colors } from "../constants/theme";
// Import menu data (array of items with title/description)
import { MENU_ITEMS } from "../constants/MenuItems";
// Import images corresponding to each menu item
import MENU_IMAGES from "../constants/MenuImages";

function MenuScreen() {
  // Get system color scheme (either 'dark' or 'light')
  const colorScheme = Appearance.getColorScheme();

  // Pick theme object based on color scheme
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  // Generate styles with theme applied
  const styles = createStyles(theme, colorScheme);

  // Use ScrollView on web, SafeAreaView on mobile
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  // Separator component between list items
  const separatorComp = <View style={styles.separator} />;

  // Footer component displayed after list items
  const footerCamp = <Text style={{ color: theme.text }}>End of List</Text>;

  return (
    // Outer container (SafeAreaView or ScrollView depending on platform)
    <Container>
      <FlatList
        // Data source for the list
        data={MENU_ITEMS}
        // Unique key for each list item
        keyExtractor={(item) => item.id.toString()}
        // Hide vertical scroll bar
        showsVerticalScrollIndicator={false}
        // Apply padding and background color to list content
        contentContainerStyle={styles.contentContainer}
        // Add separator between list rows
        ItemSeparatorComponent={separatorComp}
        // Add footer at the bottom of the list
        ListFooterComponent={footerCamp}
        ListFooterComponentStyle={styles.footerCamp}
        // Fallback UI when no items exist
        ListEmptyComponent={<Text>No Items</Text>}
        // Render each list item
        renderItem={({ item }) => (
          <View style={styles.row}>
            {/* Left side: text column */}
            <View style={styles.menuText}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>

            {/* Right side: image */}
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.menuImage} />
          </View>
        )}
      />
    </Container>
  );
}

export default MenuScreen;

// Function that creates themed styles
function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    // Applies to FlatList content (padding + background color)
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },

    // Horizontal line separator between list items
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto", // centers it (only works on web)
      marginBottom: 10,
    },

    // Style for footer container
    footerCamp: {
      marginHorizontal: "auto", // centers it on web
    },

    // Each row container (one list item)
    row: {
      flexDirection: "row", // horizontal layout: text left, image right
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20, // rounded corners
      overflow: "hidden",
      marginHorizontal: "auto", // centers row on web
    },

    // Text container inside each row
    menuText: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },

    // Title text style
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
    },

    // Shared text style (uses theme color)
    menuItemText: {
      color: theme.text,
    },

    // Image style for right-hand side of row
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
