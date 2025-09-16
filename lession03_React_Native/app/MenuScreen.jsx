import {
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaViewBase,
  ScrollView,
  FlatList,
  View,
  Container,
  Text,
  Image,
} from "react-native";
import { Colors } from "../constants/theme";
import { MENU_ITEMS } from "../constants/MenuItems";
import MENU_IMAGES from "../constants/MenuImages";

function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  //   return <div></div>;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaViewBase;
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
}

export default MenuScreen;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({});
