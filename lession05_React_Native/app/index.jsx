import {
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext"; // Provides theme + color scheme context
import { data } from "../data/todos"; // Default todos dataset (fallback)
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter"; // Google font loader
import Animated, { LinearTransition } from "react-native-reanimated"; // Animation for list transitions
import AsyncStorage from "@react-native-async-storage/async-storage"; // Persistent storage for todos
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";

function Index() {
  // Extract theme context (color scheme, theme values, and setter)
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext);

  // Generate styles dynamically based on theme + color scheme
  const styles = createStyles(theme, colorScheme);

  // App state for todos + input field
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Load fonts
  const [loaded, error] = useFonts({
    Inter_500Medium,
  });

  /**
   * Load stored todos (from AsyncStorage) when app starts.
   * If nothing is found, fallback to the default `data`.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("TodoApp");
        const storageTodo = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (storageTodo && storageTodo.length) {
          // If stored todos exist → sort newest first
          setTodos(storageTodo.sort((a, b) => b.id - a.id));
        } else {
          // Otherwise use default todos
          setTodos(data.sort((a, b) => b.id - a.id));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  /**
   * Save todos to AsyncStorage whenever `todos` changes.
   */
  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        await AsyncStorage.setItem("TodoApp", jsonValue);
      } catch (error) {
        console.error(error);
      }
    };
    storeData();
  }, [todos]);

  // Show nothing until font is loaded
  if (!loaded && !error) {
    return null;
  }

  /**
   * Add new todo item to the list.
   * - Prevents empty todos (trim check).
   * - Uses last inserted ID to create a new one.
   * - Prepends new todo to the top of the list.
   */
  const addTodos = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id: newId, title: text, completed: false, ...todos }]); // ⚠️ Bug: spread is wrong, should be [...todos]
      setText("");
    }
  };

  /**
   * Toggle completion state of a todo by ID.
   */
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Remove a todo by ID.
   */
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Renders a single todo item row.
   * - Tapping the text toggles completion.
   * - Delete button removes the todo.
   */
  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleTodo(item.id)}
      >
        {item.title}
      </Text>

      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={36}
          color="red"
          selectable={undefined}
        />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Input + Add button + Theme toggle */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />

        {/* Add new todo */}
        <Pressable onPress={addTodos} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>

        {/* Toggle dark/light mode */}
        <Pressable
          onPress={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
          style={{ marginLeft: 10 }}
        >
          {colorScheme === "dark" ? (
            <Octicons
              name="moon"
              size={36}
              color={theme.text}
              selectable={undefined}
              width={{ width: 36 }}
            />
          ) : (
            <Octicons
              name="sun"
              size={36}
              color={theme.text}
              selectable={undefined}
              width={{ width: 36 }}
            />
          )}
        </Pressable>
      </View>

      {/* Animated todo list */}
      <Animated.FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(todo) => todo.id.toString()}
        itemLayoutAnimation={LinearTransition}
        keyboardDismissMode="on-drag"
      />

      {/* Status bar adjusts for dark/light theme */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
export default Index;

/**
 * Creates themed styles.
 */
function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      width: "100%",
      maxWidth: 1024,
      marginHorizontal: "auto",
      pointerEvents: "auto",
    },
    input: {
      flex: 1,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      fontSize: 18,
      fontFamily: "Inter_500Medium",
      minWidth: 0,
      color: theme.text,
    },
    addButton: {
      backgroundColor: theme.button,
      borderRadius: 5,
      padding: 10,
    },
    addButtonText: {
      fontSize: 18,
      // ⚠️ Typo: should be "dark" not "dart"
      color: colorScheme === "dark" ? "black" : "white",
    },
    todoItem: {
      width: "100%",
      maxWidth: 1024,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 4,
      padding: 10,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      marginHorizontal: "auto",
      pointerEvents: "auto",
    },
    todoText: {
      flex: 1,
      fontFamily: "Inter_500Medium",
      fontSize: 18,
      color: theme.text,
    },
    completedText: {
      textDecorationLine: "line-through",
      color: "gray",
    },
  });
}
